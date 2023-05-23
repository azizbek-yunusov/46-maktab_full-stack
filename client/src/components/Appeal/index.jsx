import React from "react";
import { useTranslation } from "react-i18next";
import From from "./From";

const Appeal = () => {
  const { t } = useTranslation(["home"]);

  return (
    <section>
      <div className="container-full relative h-[539px] my-8">
        <img
          src="/images/bg.jpg"
          alt="bg"
          className="object-cover w-full absolute top-0 left-0 rounded-2xl -z-10 h-[539px]"
        />
        <div className="flex justify-evenly items-center px-20">
          <div className="w-full flex-col items-center justify-center">
            <div className="">
              <h1 className="text-white text-left text-5xl font-semibold leading-[60px]">
                {t("appeal-title")}
              </h1>
              <p className="text-gray-400 font-semibold mt-3">
                {t("appeal-descr")}
              </p>
            </div>
          </div>
          <div className="text-center">
            <From />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appeal;
