const ImageModel = require("../models/ImageModel");
const cloudinary = require("../utils/cloudinary");

const getAllImages = async (req, res) => {
  try {
    const images = await ImageModel.find();
    res.status(201).json({ msg: "Success", images });
  } catch (err) {
    console.log(err);
  }
};
const uploadImage = async (req, res) => {
  try {
    const { category, image } = req.body;
    console.log(req.body);
    const result = await cloudinary.uploader.upload(image, {
      folder: "Gallery",
    });
    const newImage = await ImageModel.create({
      category,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    await newImage.save();
    res.status(200).json({ msg: "Uploded", newImage });
  } catch (err) {
    console.log(err);
  }
};

const deleteImage = async (req, res) => {
  try {
    const deletedImage = await ImageModel.findById(req.params.id);
    await cloudinary.uploader.destroy(deletedImage.image.public_id);
    await deletedImage.remove();
    res.status(201).json({ msg: "Deleted", deletedImage });
  } catch (err) {
    console.log(err);
  }
};

const deleteSelected = async (req, res) => {
  try {
    let selected = [...req.body.selected];

    await selected.forEach((id) => {
      ImageModel.deleteOne({ _id: id }, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Post o'chirildi");
        }
      });
    });
    res.status(200).json({ msg: "successfully" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllImages,
  uploadImage,
  deleteImage,
  deleteSelected,
};
