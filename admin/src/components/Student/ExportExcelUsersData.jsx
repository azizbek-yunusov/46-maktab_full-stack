import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { UserRole, UserStatus } from "../Chips";

const ExportExcelUsersData = ({ tableRef, employees }) => {
  let { t } = useTranslation(["user"]);
  const tableHeadData = [
    "full-name",
    "email",
    "phone-number",
    "role",
    "joined",
    "status",
  ];
  return (
    <table className="hidden" ref={tableRef}>
      <thead>
        <tr>
          {tableHeadData.map((user, index) => (
            <th key={index}>{t(user)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.length > 0
          ? employees.map((user, index) => (
              <tr key={index}>
                <td>
                  {user.lastName ? `${user.name} ${user.lastName}` : user.name}
                </td>
                <td>{user.email}</td>
                <td>{user.phoneNumber || "----------"}</td>
                <td>
                  <UserRole role={user.admin} />
                </td>
                <td>{moment(user.createdAt).format("lll")}</td>

                <td>
                  <UserStatus status={user?.status} />
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default ExportExcelUsersData;
