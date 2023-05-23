import React from "react";
import { useTranslation } from "react-i18next";

const Sciences = () => {
  const { t } = useTranslation(["home"]);

  return (
    <section className="my-3 py-6 bg-slate-100">
      <div className="container-full">
        <h1 className="text-4xl font-semibold text-violet-900">{t("sciences")}</h1>
      </div>
    </section>
  );
};

export default Sciences;
