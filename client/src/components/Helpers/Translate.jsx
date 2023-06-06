import React from "react";
import { useTranslation } from "react-i18next";

const Translate = () => {
  const langs = [
    {
      title: "O'zbekcha",
      lang: "uz",
      icon: "/images/uz.png",
    },
    {
      title: "Русский",
      lang: "ru",
      icon: "/images/ru.png",
    },
    {
      title: "English",
      lang: "en",
      icon: "/images/en.png",
    },
  ];
  const { i18n } = useTranslation();
  const handleLangChange = (value) => {
    i18n.changeLanguage(value);
    setAnchorEl(null);
  };
  console.log(i18n);
  return (
    <div className="flex">
      {langs.map((l, index) => (
        <div key={index} className="flex items-center cursor-pointer mx-3" onClick={() => handleLangChange(l.lang)}>
          <img src={l.icon} className="h-7 mr-2" alt="" />
          <p className={`${i18n.language === l.lang ? "text-orange-300 font-semibold" : ""}`}>{l.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Translate;
