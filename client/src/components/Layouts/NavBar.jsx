import React from "react";
import Logo from "../Helpers/Logo";
import { menu } from "../../data/list";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className="">
      <nav className="container-full bg-white flex_betwen text-white">
        <div className="">
          <Logo />
        </div>
        <div className="flex_center">
          <ul className="flex font-semibold uppercase text-zinc-700">
            {menu.map((item, index) => (
              <li key={index} className="cursor-pointer mx-4">
                <Link to={item.path}>{t(item.name)}</Link>
              </li>
            ))}
          </ul>
          <IconButton>
            <FiSearch />
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
