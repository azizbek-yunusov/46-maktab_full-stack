import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  let {t} = useTranslation(["home"])
  return (
    <Link to={"/"}>
      <div className="flex items-center">
        <img src="/favicons/uzb.png" className="h-20 mr-4 object-cover" alt="" />
        <div className="xl:text-lg text-sm font-semibold text-zinc-800 uppercase">
          <h1 className={`text-lg ${className}`}>{t("school-address")}</h1>
          <h1 className={className}>{t("school-name")} </h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
