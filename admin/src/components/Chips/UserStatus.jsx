import React from "react";
import { useTranslation } from "react-i18next";

const UserStatus = ({ status }) => {
  let { t } = useTranslation(["user"]);
  return (
    <div
      className={`${
        status ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
      } rounded px-2 `}
    >
      <p className=""> {t(`${status ? "active" : "banned"}`)}</p>
    </div>
  );
};

export default UserStatus;
