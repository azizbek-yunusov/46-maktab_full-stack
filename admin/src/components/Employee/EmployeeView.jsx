import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Layout } from "../Layouts";
import { HelmetTitle } from "../../utils";
import { getEmployee } from "../../redux/employee";
import { useEffect } from "react";
import { Breadcrumbs } from "@mui/material";

const EmployeeView = () => {
  let { t } = useTranslation(["user"]);
  const { id } = useParams();
  const { isLoading, employee } = useSelector((state) => state.employee);
  const { access_token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (access_token) {
      dispatch(getEmployee({ id, access_token }));
    }
  }, [dispatch, access_token, id]);
  return (
    <>
      <HelmetTitle title={`${t("update-employee")} - ${t("employees")}`} />
      <Layout>
        <section className="relative">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-40 px-5 pt-4 text-gray-50 rounded-xl">
            <div className="flex_betwen">
              <h1 className="text-white text-2xl">{t("update-employee")}</h1>
              <Breadcrumbs sx={{ color: "#ffff" }}>
                <Link to={"/"} className="">
                  {t("home")}
                </Link>
                <Link to={"/myprofile"} className="">
                  {t("employees")}
                </Link>
                <h1>{t("update-employee")}</h1>
              </Breadcrumbs>
            </div>
          </div>
          <div className="">
            {employee.firstName}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EmployeeView;
