import React from "react";
import { useTranslation } from "react-i18next";

const ReviewStatus = ({ status }) => {
  let { t } = useTranslation(["product"]);
  console.log(status);
  return (
    <div
      className={`${
        status ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"
      } rounded px-2 `}
    > 
      <p className=""> {t(`${status ? "active" : "not-active"}`)}</p>
    </div>
  );
};

export default ReviewStatus;
