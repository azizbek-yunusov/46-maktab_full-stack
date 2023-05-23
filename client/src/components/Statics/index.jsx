import React from "react";
import { statics } from "../../data/list";
import { useTranslation } from "react-i18next";

const Statics = () => {
  const { t } = useTranslation(["home"]);

  return (
    <div className="container-full my-8">
      <h1 className="text-blue-900 text-center text-4xl font-semibold mb-10">
        {t("statics")}
      </h1>
      <div className=" flex items-center justify-evenly my-5">
        {statics.map((item, index) => (
          <div
            className="flex flex-col items-center mt-2 transition-all duration-300 hover:-mt-2"
            key={index}
          >
            <div className={`${item.color} font-bold text-5xl`}>
              {item.value}
            </div>
            <p className="text-gray-500 text-sm px-9 py-2 hover:bg-black hover:text-white rounded-lg uppercase mt-3 transition-all duration-300">
              {t(item.name)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statics;
