import React from "react";
import { useTranslation } from "react-i18next";
import { paymentStatusData } from "../../data/OrderTypeData";

const PaymentStatus = ({ status }) => {
  let { t } = useTranslation(["order"]);
  const currentStatus = paymentStatusData.filter((item) => {
    return item.value === status;
  });

  return (
    <div className={`${currentStatus[0].color} px-2 py-1 rounded text-xs`}>
      <p className="">{t(`${currentStatus[0].name}`)}</p>
    </div>
  );
};

export default PaymentStatus;
