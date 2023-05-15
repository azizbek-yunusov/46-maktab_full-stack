const AdminModel = require("../models/AdminModel");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../utils/sendEmail");

const { CLIENT_URL, GOOGLE_OAUTH, GOOGLE_SECRET, JWT_SECRET } = process.env;

const signUp = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ error: "Please add all the feilds!!!" });
    }
    const userExists = await AdminModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await AdminModel.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      user: {
        ...newUser._doc,
      },
      msg: "Created",
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const user = await AdminModel.findOne({ otp });
    if (!user) {
      return res.status(400).json({ err: "User not found" });
    }
    console.log(user.otp, "===", otp);
    if (user.otp !== otp) {
      return res.status(400).json({ success: false, err: "Invalid OTP code" });
    }
    if (user.otpExpiry < Date.now()) {
      return res
        .status(400)
        .json({ success: false, err: "Invalid OTP has been Expired" });
    }

    user.verified = true;
    user.otp = null;
    user.otpExpiry = null;

    await user.save();
    const refresh_token = createRefreshToken({ id: user._id });
    const access_token = createAccessToken({ id: user._id });

    res.status(200).json({
      msg: "Verified!!!",
      access_token,
      refresh_token,
      user: {
        ...user._doc,
      },
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const signInAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ err: "All fields are required" });
    }
    const user = await AdminModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ err: "Email is incorrect" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ err: "Password is incorrect." });

    const refresh_token = createRefreshToken({ id: user._id });
    const access_token = createAccessToken({ id: user._id });

    if (!user.admin) {
      return res.status(500).json({ msg: "Admin resources access denied" });
    }

    res.status(200).json({
      msg: "Login success!",
      access_token,
      admin_token: refresh_token,
      user: {
        ...user._doc,
      },
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getAccessAdminToken = async (req, res) => {
  try {
    // const refreshToken = await req.cookies.admintoken;
    const refresh_token = req.body.admin_token;
    if (!refresh_token)
      return res.status(400).json({ msg: "Please login now!" });

    jwt.verify(refresh_token, JWT_SECRET, async (err, client) => {
      if (err) return res.status(400).json({ msg: "Please login now." });

      const user = await AdminModel.findById(client.id).select("-password");

      if (!user) return res.status(400).json({ msg: "This does not exist." });
      const access_token = createAccessToken({ id: client.id });

      res.status(200).json({
        msg: "success!",
        access_token,
        user,
      });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await AdminModel.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: "This email does not exist." });

    const access_token = createAccessToken({ id: user._id });
    const url = `${CLIENT_URL}/user/reset/${access_token}`;

    sendMail(email, url, "Reset your password");
    res.json({ msg: "Re-send the password, please check your email." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    console.log(password);
    const passwordHash = await bcrypt.hash(password, 12);

    await AdminModel.findOneAndUpdate(
      { _id: req.user.id },
      {
        password: passwordHash,
      }
    );

    res.json({ msg: "Password successfully changed!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const signOutClient = async (req, res) => {
  try {
    res.clearCookie("refreshtoken");
    return res.json({ msg: "Sign out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const signOutAdmin = async (req, res) => {
  try {
    res.clearCookie("admintoken");
    return res.json({ msg: "Sign out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const googleOauth = async (req, res) => {
  try {
    const { access_token } = req.body;
    if (!access_token) {
      return res.status(401).json({ err: "access_token required!!!" });
    }
    const response = await axios.get(GOOGLE_OAUTH, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (!response.data) {
      return res.status(401).json({ err: "Something Went Wrong!" });
    }
    const name = response.data.given_name;
    const lastName = response.data?.family_name;
    const email = response.data.email;
    const password = email + GOOGLE_SECRET;
    const picture = response.data.picture;
    const verified = response.data.email_verified;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await AdminModel.findOne({ email });
    if (user) {
      console.log(user);
      console.log();
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid)
        return res.status(400).json({ err: "Password is incorrect." });

      const refresh_token = createRefreshToken({ id: user._id });
      const access_token = createAccessToken({ id: user._id });
      res.status(200).json({
        msg: "Login success!",
        access_token,
        refresh_token,
        user: {
          ...user._doc,
        },
      });
    } else {
      const newUser = await AdminModel.create({
        name,
        lastName,
        email,
        password: hashedPassword,
        avatar: {
          public_id: picture,
          url: picture,
        },
        verified,
      });
      await newUser.save();

      const refresh_token = createRefreshToken({ id: newUser._id });
      const access_token = createAccessToken({ id: newUser._id });
      res.status(200).json({
        msg: "Login success!",
        access_token,
        refresh_token,
        user: {
          ...newUser._doc,
        },
      });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// Token
const createActivationToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "5m" });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
};

module.exports = {
  signUp,
  signInAdmin,
  signOutAdmin,
  signOutClient,
  googleOauth,
  forgotPassword,
  resetPassword,
  getAccessAdminToken,
  verifyOtp,
};
