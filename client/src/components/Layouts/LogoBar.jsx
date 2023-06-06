import React from "react";
import { contacts } from "../../data/list";
import Logo from "../Helpers/Logo";

const LogoBar = () => {
  return (
    <div className="container-full flex_betwen justify-center items-center py-3">
      <div className="">
        <Logo />
      </div>
      <div className="flex justify-end">
        {contacts.map((item, index) => (
          <div key={index} className="flex items-center mx-2">
            <div className="mr-3 text-3xl mt-2">{item.icon}</div>
            <div className="">
              <h1 className="text-xs text-gray-500 font-semibold">{item.title}:</h1>
              <a className="font-semibold text-sm text-gray-800" href="">
                {item.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
