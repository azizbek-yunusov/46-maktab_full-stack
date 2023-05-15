import React from "react";
import { useTranslation } from "react-i18next";
import { paymentMethodData } from "../../data/OrderTypeData";

const PaymentMethod= ({ status }) => {
  let { t } = useTranslation(["order"]);
  const paymentType = paymentMethodData.find((item) => {
    return item.value === status;
  });
  return <span className="">{t(`${paymentType.name.slice(0, 10)}`)}</span>;
};

export default PaymentMethod;
