import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { HelmetTitle } from "../utils";

const NotFound = () => {
  let { t } = useTranslation(["home"]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HelmetTitle title={t("page-not-found")} />
      <section className="overflow-hidden">
        <div className="container-full pt-7  min-h-[600px] flex items-center flex-col justify-start">
          <h1 className="md:text-gray-800 my-4 font-semibold text-3xl ">
            Ushbu sahifa topilmadi
          </h1>
          <p className="text-gray-400 text-base md:my-3 md:px-[250px] xl:px-[450px] text-center">
            {/* {t("page-not-found-title")} */}
          </p>
          {/* <img src={NotFoundSvg} className="h-64 lg:h-72" alt="" /> */}
          <Link to={"/"}>
          <button
            type="button"
            className="text-white mt-12 bg-cyan-500 hover:bg-cyan-600 uppercase focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-16 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Bosh sahifa
          </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
