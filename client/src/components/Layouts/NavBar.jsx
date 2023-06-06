import React, { useEffect, useState } from "react";
import Logo from "../Helpers/Logo";
import { menu } from "../../data/list";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import SmallLogo from "../Helpers/SmallLogo";
function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 150);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return isTop;
}
const NavBar = () => {
  const { t } = useTranslation(["home"]);
  const isTop = useIsScrollTop();
  return (
    <div
      className={`${isTop ? "bg-violet-500 " : "fixed top-0 left-0 z-50 w-full bg-white shadow-xl"}`}
    >
      <nav
        className={`container-full flex_betwen  w-full ${
          isTop ? " text-white py-4" : "bg-white text-gray-700 py-2"
        } rounded-xl
       `}
      >
        {isTop ? null : <SmallLogo className={"text-sm"} />}
        {isTop ?         <ul className="flex uppercase">
          {menu.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer mx-2 xl:text-base text-xs"
            >
              <Link to={item.path}>{t(item.name)}</Link>
            </li>
          ))}
        </ul> :        <ul className="flex uppercase">
          {menu.slice(0, 6).map((item, index) => (
            <li
              key={index}
              className="cursor-pointer mx-2 xl:text-base hover:text-purple-400 text-xs"
            >
              <Link to={item.path}>{t(item.name)}</Link>
            </li>
          ))}
        </ul> }

      </nav>
    </div>
  );
};

export default NavBar;
