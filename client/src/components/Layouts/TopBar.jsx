import React from "react";
import { ImLocation } from "react-icons/im";
import Translate from "../Helpers/Translate";
import { useTranslation } from "react-i18next";
import { socials } from "../../data/socials";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const TopBar = () => {
  let { t } = useTranslation(["home"]);
  return (
    <div className="bg-violet-500">
      <div className="container-full py-2 text-white">
        <div className="flex_betwen">
          <div className="flex_center">
            <div className="flex_center mr-5">
              <ImLocation className="text-xl" />
              <p className="ml-1">{t("school-address")}</p>
            </div>
            <a href="tel:" className="flex_center">
              <BsFillTelephoneFill className="text-xl" />
              <p className="ml-1">+998 94 544 55 94</p>
            </a>
          </div>
          <div className="flex_center">
            <div className="flex_center mr-3">
              <MdEmail className="text-xl mr-1" />
              <p>46-maktab@gmail.com</p>
            </div>
            <ul className="flex mr-8">
              {socials.map((item, index) => (
                <li key={index} className="mx-2 text-xl">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
            <Translate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
