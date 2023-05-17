import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const HelmetTitle = ({ title }) => {
  let { t } = useTranslation(["home"]);
  
  return (
    <Helmet>
      <title>{`${title} — ${t("school")}`}</title>
    </Helmet>
  );
};

export default HelmetTitle;
