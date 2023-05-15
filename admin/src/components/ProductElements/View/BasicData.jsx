import React from "react";
import { Breadcrumbs, Rating, Tab, Tabs, Typography } from "@mui/material";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Price } from "../../Helpers";

const BasicData = ({ product }) => {
  let { t } = useTranslation(["product"]);

  return (
    <div className="block">
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <div
        // onClick={handleScrollToReviews}
        className="cursor-pointer flex items-center my-5"
      >
        <span className="text-lg text-gray-700 mr-2">
          {product.ratings.toFixed(1)}
        </span>
        <Rating
          icon={<AiFillStar fontSize="25px" />}
          emptyIcon={<AiOutlineStar fontSize="25px" />}
          readOnly
          value={product.ratings || 0}
        />
        <span className="text-lg text-gray-700 ml-2">
          {"("}
          {product.numOfReviews} {t("review")}
          {")"}
        </span>
      </div>
      <Price price={product.price} className="text-2xl font-semibold" />
    </div>
  );
};

export default BasicData;
