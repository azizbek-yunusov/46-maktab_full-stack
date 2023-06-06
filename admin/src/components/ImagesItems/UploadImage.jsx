import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HelmetTitle } from "../../utils";
import { Layout } from "../Layouts";
import { uploadImage } from "../../redux/imageSlice";
import { imageUrl } from "../../utils/baseUrls";
import axios from "axios";

const UploadImage = () => {
  let { t } = useTranslation(["dashboard"]);
  const { access_token } = useSelector((state) => state.auth);
  const { isLoading, isError } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [image, setImage] = useState([]);
  const navigate = useNavigate();

  const handleImage = (e) => {
    const setFileToBase = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    };
    const file = e.target.files[0];
    setFileToBase(file);
  };
  const deleteImage = (index) => {
    const newArr = [image];
    newArr.splice(index, 1);
    setImage(newArr);
  };
  const uploadImageHandle = async (e) => {
    e.preventDefault();
    const imageData = {
      category,
      image,
    };
    await dispatch(uploadImage({ access_token, imageData }));
    if (!isLoading) {
      toast.success(t("uploded-image"));
      navigate("/dashboard/images");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <main>
      <HelmetTitle title={t("upload-image-title")} />
      <Layout>
        <section className="relative">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-40 px-5 pt-4 text-gray-50 rounded-xl">
            <div className="flex_betwen">
              <h1 className="text-white text-2xl">{t("upload-image-title")}</h1>
              <ol className="list-reset mt-1 flex text-grey-dark text-sm text-gray-100">
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <span>{t("upload-image-title")}</span>
                </li>
              </ol>
            </div>
          </div>
          <div className="-mt-24 rounded-2xl flex mx-4 bg_color backdrop-blur-md dark: border_primary">
            <div className="flex w-full p-8 px-16">
              <div className="w-full">
                <form onSubmit={uploadImageHandle}>
                  <div className="flex flex-col">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {t("select-category-item")}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label={t("select-category-item")}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <MenuItem value="gallery">{t("gallery")}</MenuItem>
                        <MenuItem value="banner">{t("banner")}</MenuItem>
                      </Select>
                    </FormControl>

                    <div className="mt-8">
                      <label htmlFor="file-upload" className="w-full">
                        <p className="block text-base mb-1 text_color">
                          {t("upload-image")}
                        </p>
                        <div className="mr-2 flex min-w-full bg-gray-100 dark:bg-gray-700/50 justify-center items-center rounded-md border-2 border-dashed border-gray-300 p-3 py-8 cursor-pointer">
                          <div className="flex justify-center flex-col items-center">
                            <AiOutlineCloudUpload className="text-3xl text-gray-600 text_color" />
                            <div className="flex text-sm text_color">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md font-medium"
                              >
                                <span> {t("upload-image")}</span>
                                <input
                                  id="file-upload"
                                  name="file"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleImage}
                                />
                              </label>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG up to 10MB
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                    {image.length > 0 ? (
                      <div className="p-[6px] mx-[2px] relative  md:mt-3">
                        <div
                          className="border_primary overflow-hidden rounded"
                          id="file_img"
                        >
                          <img
                            src={image}
                            alt="images"
                            className="object-cover p-2 w-full"
                          />
                        </div>
                        <IoMdClose
                          onClick={() => deleteImage(0)}
                          className="absolute text-gray-600 top-0 p-1 text-2xl border_primary right-0 cursor-pointer rounded-full bg-white"
                        />
                      </div>
                    ) : null}
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
    </main>
  );
};

export default UploadImage;
