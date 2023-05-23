import moment from "moment";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";

const ElonCard = ({ _id, title, createdAt, viewsCount, image }) => {
  return (
    <div className="flex items-center my-3">
      <img src={image.url} className="h-24 w-24 rounded-full  mr-3" alt="" />
      <div className="">
        <Link to={`/post/${_id}`}>
          <h1 className="font-semibold text-blue-900">{title}</h1>
        </Link>
        <div className="flex items-center mt-2 text-gray-600 text-sm">
          <BsCalendarDate className="mr-1 text-purple-500" />
          <span>{moment(createdAt).format("L")}</span>
          <div className="flex_center ml-2">
            <AiOutlineEye className="mr-1 text-xl text-purple-500" />
            <span>{viewsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElonCard;
