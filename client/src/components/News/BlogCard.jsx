import moment from "moment";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsCalendarDate, BsEye, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogCard = ({ _id, title, createdAt, viewsCount, image }) => {
  return (
    <div className="p-3 rounded-2xl shadow-sm bg-white">
      <Link to={`/post/${_id}`} className="w-full flex_center">
        <img
          src={image?.url}
          className="h-40 w-full object-cover rounded-xl"
          alt={title}
        />
      </Link>
      <div className="flex_betwen my-2 text-gray-500 dark:text-zinc-300">
        <div className="flex_center">
          <BsCalendarDate className="mr-1" />
          <span>{moment(createdAt).format("L")}</span>
        </div>
        <div className="flex_center">
          <AiOutlineEye className="mr-1 text-xl" />
          <span>{viewsCount}</span>
        </div>
      </div>
      <Link
        to={`/post/${_id}`}
        className=" text-zinc-700 dark:text-zinc-100 font-semibold text-sm hover:text-purple-600 transition_normal"
      >
        <p className="mb-2">{title}</p>
      </Link>
    </div>
  );
};

export default BlogCard;
