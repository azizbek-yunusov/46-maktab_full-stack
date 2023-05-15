import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import {
  AiFillStar,
  AiOutlineCloudUpload,
  AiOutlineStar,
} from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdAddAPhoto } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateReview } from "../../redux/review";
import { getReview } from "../../redux/review";
import { HelmetTitle } from "../../utils";
import { Layout } from "../Layouts";

const UpdateReview = () => {
  const { isLoading, review, isError } = useSelector((state) => state.review);
  const { access_token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  let { t } = useTranslation(["product"]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [pictures, setPictures] = useState([]);
  const goback = useNavigate();
  const navigate = useNavigate();

  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPictures((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const deleteImages = (index) => {
    const newArr = [...pictures];
    newArr.splice(index, 1);
    setPictures(newArr);
  };

  const updateReviewHandle = async (e) => {
    e.preventDefault();
    const reviewData = {
      rating,
      comment,
      isActive,
    };
    console.log(reviewData);
    await dispatch(updateReview({ access_token, id, reviewData }));
    if (!isLoading) {
      toast.success(t("updated-review"));
      navigate("/dashboard/reviews");
    }

    if (isError) {
      toast.error("Something Went Wrong!");
    }
  };
  useEffect(() => {
    dispatch(getReview({ id }));
  }, [dispatch, id]);
  useEffect(() => {
    if (review) {
      setRating(review?.rating || "");
      setComment(review?.comment || "");
      setPictures(review?.pictures || []);
      setIsActive(review?.isActive || false);
    }
  }, [review]);
  return (
    <div>
      <HelmetTitle title={t("edit-review")} />
      <Layout>
        <section className="relative">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-40 px-5 pt-4 text-gray-50 rounded-xl">
            <div className="flex_betwen">
              <h1 className="text-white text-2xl">{t("edit-review")}</h1>
              <ol className="list-reset mt-1 flex text-grey-dark text-sm text-gray-100">
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <span>{t("edit-review")}</span>
                </li>
              </ol>
            </div>
          </div>
          <div className="-mt-24 rounded-2xl flex mx-4 bg_color border_primary">
            <div className="flex w-full p-8 px-10 xl:px-36">
              <div className="w-full">
                <form onSubmit={updateReviewHandle}>
                  <div className="">
                    <div className="flex items-center justify-center mb-5">
                      <p className="text-gray-700 mr-2">{t("rate")}</p>
                      <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(e, newValue) => {
                          setRating(newValue);
                        }}
                        icon={<AiFillStar fontSize="30px" />}
                        emptyIcon={<AiOutlineStar fontSize="30px" />}
                      />
                    </div>
                    <TextField
                      fullWidth
                      multiline
                      label={t("review-comment")}
                      minRows={4}
                      value={comment}
                      required
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="md:mt-5 mt-3 flex min-w-full bg-gray-50 dark:bg-gray-700/50 justify-center items-center rounded-md border-2 border-dashed border-gray-300 p-3 py-8 cursor-pointer">
                      <div className="flex justify-center flex-col items-center">
                        <MdAddAPhoto className="text-3xl text-gray-500" />
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
                      </div>
                    </div>
                    {pictures.length ? (
                      <div className="flex md:mt-2 ">
                        {pictures.map((img, index) => (
                          <div key={index} className="p-1 mx-1 relative">
                            <div
                              className="border border-gray-300 overflow-hidden rounded"
                              id="file_img"
                            >
                              <img
                                src={img.url}
                                alt="images"
                                className="img-thumbnail max-w-[120px] w-full"
                              />
                            </div>
                            <IoMdClose
                              onClick={() => deleteImages(index)}
                              className="absolute text-gray-600 top-0 p-1 border text-2xl border-gray-300 right-0 cursor-pointer rounded-full bg-white"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xl my-2 text-center">
                        {t("not-images")}
                      </p>
                    )}
                  </div>
                  <div className="flex_end">
                    {/* <FormLabel id="demo-form-control-label-placement">
                        Label placement
                      </FormLabel> */}
                    <RadioGroup
                      row
                      aria-labelledby="demo-form-control-label-placement"
                      name="position"
                      defaultValue="top"
                      value={isActive}
                      onChange={(e) => setIsActive(e.target.value)}
                    >
                      <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label={t("active")}
                      />
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label={t("not-active")}
                      />
                    </RadioGroup>
                  </div>
                  <div className="w-full mt-10 flex justify-end">
                    <Button
                      onClick={() => goback(-1)}
                      variant="contained"
                      size="large"
                      color="info"
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
    </div>
  );
};

export default UpdateReview;
