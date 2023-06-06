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
      <div className="container-full py-2 text-white flex_betwen">
        <Translate />
        <div className="flex justify-end">
          <a
            href="https://kundalik.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-blue-400"
          >
            www.kundalik.com
          </a>
          <span>|</span>
          <div className="flex_center">
            <ul className="flex mr-8">
              {socials.map((item, index) => (
                <li key={index} className="mx-3 text-2xl">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
