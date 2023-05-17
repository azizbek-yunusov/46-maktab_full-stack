import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to={"/"}>
      <div className="flex items-center">
        <img src="/favicons/gerb.png" className="h-28 object-cover" alt="" />
        <div className="xl:text-xl text-lg font-semibold text-zinc-800 uppercase">
          <h1 className={className}>Farg'ona viloyati Bag'dod tumani</h1>
          <h1 className={className}>46- sonli umumta'lim maktabi </h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
