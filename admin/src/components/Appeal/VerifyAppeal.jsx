import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import address from "../../data/address.json";
import { Layout } from "../Layouts";
import { HelmetTitle } from "../../utils";
import { editStudent, getByStudent } from "../../redux/student";
import { sciences } from "../../data/sciences";
import { useEffect } from "react";
import {
  Button,
  Breadcrumbs,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const VerifyAppeal = () => {
  let { t } = useTranslation(["user"]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, student } = useSelector((state) => state.student);
  const { access_token } = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [brith, setBrith] = useState("");
  const [degree, setDegree] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [classLetter, setClassLetter] = useState("");
  const [selectDistricts, setSelectDistricts] = useState([]);
  const [region, setRegion] = useState("Farg'ona Viloyati");
  const [district, setDistrict] = useState("Bog‘dod tumani");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  const handleDateChange = (event) => {
    setBrith(event.target.value);
  };
  const updateEmployeeHandle = async (e) => {
    e.preventDefault();
    try {
      let employeeData = {
        firstName,
        lastName,
        brith,
        classLetter,
        classNumber,
        region,
        district,
        street,
      };
      dispatch(editStudent({ id, employeeData, access_token }));
      // if (!isLoading) {
      //   navigate("/dashboard/students");
      // }
      toast.success(t("success-added"));
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  // address
  const findStandartRegionId = address.regions.find((rg) => {
    return rg.name === region;
  });
  const defaultDistricts = address.districts.filter((value) => {
    return value.region_id === 12;
  });
  const handleRegion = (e) => {
    const getRegionId = e.target.value;
    const getRegionData = address?.regions.find(
      (reg) => reg.id === getRegionId
    );
    const getDistrictsdata = address.districts.filter(
      (item) => item.region_id === getRegionId
    );
    setRegion(getRegionData.name);
    setSelectDistricts(getDistrictsdata);
  };
  useEffect(() => {
    if (access_token) {
      dispatch(getByStudent({ id, access_token }));
    }
  }, [dispatch, access_token, id]);

  useEffect(() => {
    if (student) {
      setFirstName(student.firstName);
      setLastName(student.lastName);
      setBrith(student.brith);
      setClassLetter(student.classLetter);
      setClassNumber(student.classNumber);
      setStreet(student.street);
    }
  }, [student]);
  return (
    <>
      <HelmetTitle title={`${t("update-student")} - ${t("students")}`} />
      <Layout>
        <section className="relative">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-40 px-5 pt-4 text-gray-50 rounded-xl">
            <div className="flex_betwen">
              <h1 className="text-white text-2xl">{t("update-student")}</h1>
              <Breadcrumbs sx={{ color: "#ffff" }}>
                <Link to={"/"} className="">
                  {t("home")}
                </Link>
                <Link to={"/myprofile"} className="">
                  {t("students")}
                </Link>
                <h1>{t("update-student")}</h1>
              </Breadcrumbs>
            </div>
          </div>
          <div className="-mt-24 rounded-2xl flex mx-4 bg_color border_primary">
            <div className="flex w-full p-8 px-8 xl:px-16">
              <div className="w-full">
                <form onSubmit={updateEmployeeHandle}>
                  <div className="grid grid-cols-2 gap-5">
                    <TextField
                      required
                      fullWidth
                      label={t("first-name")}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                      required
                      fullWidth
                      label={t("last-name")}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <div className="flex_center">
                      <TextField
                        required
                        fullWidth
                        min="1"
                        max="1"
                        type="number"
                        sx={{ marginRight: "20px" }}
                        label={t("class-number")}
                        value={classNumber}
                        onChange={(e) => setClassNumber(e.target.value)}
                      />
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          {t("class-letter")}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={classLetter}
                          label={t("class-letter")}
                          onChange={(e) => setClassLetter(e.target.value)}
                        >
                          <MenuItem value="A">"A"</MenuItem>
                          <MenuItem value="B">"B"</MenuItem>
                          <MenuItem value="D">"D"</MenuItem>
                          <MenuItem value="E">"E"</MenuItem>
                          <MenuItem value="F">"F"</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="block border border-gray-300 rounded-lg ">
                      <p className="-mt-[10px] bg-white w-24 ml-2 text-gray-600 text-sm">
                        {t("date-of-brith")}
                      </p>
                      <input
                        type="date"
                        className="mt-1 ml-5"
                        value={brith}
                        onChange={handleDateChange}
                      />
                    </div>
                  </div>
                  <h1 className="my-6 text-xl">{t("residential-address")}</h1>
                  <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {t("region")}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={findStandartRegionId?.id || "12"}
                        label={t("region")}
                        onChange={(e) => handleRegion(e)}
                      >
                        {address.regions.map((item, index) => (
                          <MenuItem key={index} value={item.id}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {t("district")}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder="select"
                        label={t("district")}
                        value={district || ""}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        {(selectDistricts.length
                          ? selectDistricts
                          : defaultDistricts
                        ).map((item, index) => (
                          <MenuItem key={index} value={item.name}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      required
                      variant="outlined"
                      type="text"
                      className="rounded-xl col-span-2"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      label={t("street")}
                    />
                  </div>
                  <div className="w-full mt-10 flex justify-end">
                    <Button
                      onClick={() => navigate(-1)}
                      variant="contained"
                      size="large"
                      sx={{
                        width: "150px",
                        marginRight: "15px",
                      }}
                    >
                      {t("cancel")}
                    </Button>

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      color="info"
                      sx={{
                        width: "150px",
                      }}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {t("loading")}
                        </div>
                      ) : (
                        t("save")
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default VerifyAppeal;
