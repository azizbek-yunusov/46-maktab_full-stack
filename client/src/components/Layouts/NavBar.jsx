import React from "react";
import Logo from "../Helpers/Logo";
import { menu } from "../../data/list";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <nav className="container-full bg-white flex_betwen text-white">
        <div className="">
          <Logo />
        </div>
        <div className="">
          <ul className="flex text-xl text-zinc-800">
            {menu.map((item, index) => (
              <li key={index} className="cursor-pointer mx-4">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
