import moment from "moment";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineEye } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HelmetTitle } from "../../utils";
import { getPost } from "../../redux/post";
import SideBar from "./SideBar";

const PostDetail = () => {
  let { t } = useTranslation(["home"]);
  const { isLoading, post } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost({ id }));
  }, [dispatch, id]);
  return (
    <>
      <HelmetTitle title={post?.title} />
      {!isLoading && post ? (
        <div className="relative container-full grid grid-cols-12 gap-x-5 my-8">
          <div className="col-span-8">
            <div className="w-full flex_center">
              <img
                src={post.image?.url}
                className="h-96 w-full object-cover rounded-xl"
                alt={post.title}
              />
            </div>
            <div className="flex my-4 text-gray-700">
              <div className="flex_center mr-3">
                <BsCalendarDate className="mr-1" />
                <span>{moment(post.createdAt).format("L")}</span>
              </div>
              <div className="flex_center">
                <AiOutlineEye className="mr-1 text-xl" />
                <span>{post.viewsCount}</span>
              </div>
            </div>
            <h1 className="my-4 font-semibold text-2xl text-gray-700">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
          <div className="col-span-4">
            <SideBar />
          </div>
        </div>
      ) : (
        <h1 className="">loading...</h1>
      )}
    </>
  );
};

export default PostDetail;
