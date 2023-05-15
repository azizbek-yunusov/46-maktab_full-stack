import moment from "moment";
import React, { useState } from "react";
import { IconButton, Rating } from "@mui/material";
import {
  AiFillStar,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineStar,
} from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const Comments = ({ review }) => {
  let { t } = useTranslation(["product"]);
  const dispatch = useDispatch();
  const [isReply, setIsReply] = useState(false);

  const { access_token, user, isLogged, isLoginShow } = useSelector(
    (state) => state.auth
  );

  // const likeReviewHandle = async (id) => {
  //   try {
  //     if (!isLogged) {
  //       dispatch(toggleLoginModal());
  //     } else {
  //       dispatch(likeReview({ access_token, id }));
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const unLikeReviewHandle = async (id) => {
  //   try {
  //     if (!isLogged) {
  //       dispatch(toggleLoginModal());
  //     } else {
  //       dispatch(unLikeReview({ access_token, id }));
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const showReplyForm = () => {
    setIsReply(!isReply);
  };

  return (
    <div className="flex items-center justify-around my-2 w-[40%]">
      <div className="flex_col items-center">
        <img
          src={review.user.avatar.url}
          alt="avatar"
          className="rounded-full w-14 mb-1"
        />
        <h1 className="my-2 text-sm font-semibold text-zinc-700">
          {review?.user ? review?.user?.name : t("deleted-user")}
        </h1>
        <p className="text-xs text-zinc-500">
          {review.createdAt
            ? moment(review?.createdAt).locale("uz-latn").format("LL")
            : ""}
        </p>
      </div>
      <div className="flex_col">
        <Rating
          icon={<AiFillStar fontSize="24px" />}
          emptyIcon={<AiOutlineStar fontSize="24px" />}
          value={review?.rating}
          readOnly
        />
        <p className="my-2 text-sm">{review?.comment}</p>

        <div className="flex">
          {review?.pictures?.map((img, index) => (
            <img
              key={index}
              src={img.url}
              className="object-cover h-28 bg-gray-100 rounded-md"
              alt="Order"
            />
          ))}
        </div>
        <div className="md:mt-4 mt-2 flex_betwen">
          <div className="flex justify-end">
            <p
              onClick={() => showReplyForm()}
              className="text-gray-600 cursor-pointer text-sm"
            >
              {t("reply")}
            </p>
          </div>
          <div className="flex_betwen">
            <div className="flex items-center mr-3">
              <IconButton
                // onClick={() => likeReviewHandle(review._id)}
                size="small"
              >
                <AiOutlineLike
                  className={`${
                    review?.likes?.includes(user?._id) ? "text-orange-500" : ""
                  } md:text-2xl`}
                />
              </IconButton>
              <p className="ml-1">{review?.likes?.length}</p>
            </div>
            <div className="flex items-center">
              <IconButton
                // onClick={() => unLikeReviewHandle(review._id)}
                size="small"
              >
                <AiOutlineDislike
                  className={`${
                    review?.unLikes?.includes(user?._id)
                      ? "text-orange-500"
                      : ""
                  } md:text-2xl`}
                />
              </IconButton>
              <p className="ml-1">{review?.unLikes?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
