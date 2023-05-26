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
      <HelmetTitle title={`${t("employee-view")} - ${t("employees")}`} />
      <Layout>
        {employee && (
          <section className="relative px-24">
            <div className=" my-8">
              <div className="grid grid-cols-2 gap-x-2">
                <div className="">
                  <h1 className="text-2xl text-center font-semibold mb-4 uppercase">
                    {t("reference")}
                  </h1>
                  <p className="text-2xl text-center font-semibold">
                    {employee.firstName} {employee.lastName}
                  </p>
                </div>
                <div className="flex justify-around ">
                  <img
                    src={employee.avatar}
                    className="rounded-md h-40"
                    alt=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 my-6">
                <div className="">
                  <h1 className="text-xl font-semibold">{t("data-brith")}:</h1>
                  <p className="mt-1">{employee.brith}</p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">
                    {t("place-of-birth")}:
                  </h1>
                  <p className="mt-1">
                    {employee.region}
                    {", "}
                    {employee.district}
                    {", "}
                    {employee.address}
                  </p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">{t("nationality")}:</h1>
                  <p className="mt-1">{t("uzbek")}</p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">
                    {t("partisanship")}:
                  </h1>
                  <p className="mt-1">{"-"}</p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">{t("information")}:</h1>
                  <p className="mt-1"> {t(employee.degree)}</p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">
                    {t("completed-by")}:
                  </h1>
                  <p className="mt-1">{t("non")}</p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">
                    {t("education-specialization")}:
                  </h1>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">
                    {t(employee.position)}:
                  </h1>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">{t("degree-info")}:</h1>
                  <p className="mt-1"> {t(employee.degree)}</p>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">
                    {t("scientific-title")}:
                  </h1>
                  <p className="mt-1">{t("non")}</p>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-center font-semibold mb-4 uppercase"></h1>
              </div>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
};

export default EmployeeView;
