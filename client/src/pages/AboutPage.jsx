import React from "react";
import SideBar from "../components/News/SideBar";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="container-full">
      <div className="relative container-full grid grid-cols-12 gap-x-5 my-8">
        <div className="col-span-8">
          <h1 className="">{t("about")}</h1>
        </div>
        <div className="col-span-4">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
