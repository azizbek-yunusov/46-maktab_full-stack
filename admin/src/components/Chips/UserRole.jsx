import React from "react";
import { useTranslation } from "react-i18next";

const UserRole = ({ role }) => {
  let { t } = useTranslation(["user"]);
  return (
    <div
      className={`${
        role ? "bg-purple-100 text-purple-600" : "bg-orange-100 text-orange-500"
      } rounded px-2 `}
    >
      <p className=""> {t(`${role ? "admin" : "client"}`)}</p>
    </div>
  );
};

export default UserRole;
