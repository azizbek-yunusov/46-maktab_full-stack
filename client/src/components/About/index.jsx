import React from "react";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";
import { checks } from "../../data/list";

const About = () => {
  const { t } = useTranslation(["home"]);

  return (
    <section className="border-t-2 border-violet-200/50">
      <div className="container-full grid grid-cols-2 my-8 py-10">
        <div className="col-span-1">
          <img
            src="/images/img1.jpg"
            className="h-64 shadow rounded-xl object-cover"
            alt=""
          />
          <img
            src="/images/img2.jpg"
            className="h-64 shadow -rotate-12 mt-3 ml-5 rounded-xl object-cover"
            alt=""
          />
        </div>
        <div className="col-span-1">
          <h1 className="text-3xl font-semibold text-violet-900">
            {t("about")}
          </h1>
          <p className="my-11 text-lg text-gray-800 leading-8 ml-9">
            O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi
            Jizzax viloyat kasbiy ta’limni rivojlantirish va muvofiqlashtirish
            hududiy boshqarmasi tasarrufidagi Dashtobod transport kasb-hunar
            kolleji O‘zbekiston Respublikasi Prezidentining 2019 yil 6
            sentyabrdagi PF-5812-son Farmoni bilan Zomin tuman 2-son kasb-hunar
            maktabi sifatida tashkil etildi.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {checks.map((item, index) => (
              <div className="flex items-center mt-2" key={index}>
                <div className={`${item.color} p-2 rounded-full`}>
                  <BsCheck className="text-white text-4xl" />
                </div>
                <p className="text-xl text-gray-800 ml-3 font-semibold">
                  {t(item.name)}
                </p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="text-white mt-12 bg-cyan-500 hover:bg-cyan-600 uppercase focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-16 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {t("batafsil")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
