import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { OrderStatus, PaymentStatus, Price } from "../Helpers";

const ExportExcelOrderData = ({ tableRef, orders }) => {
  let { t } = useTranslation(["order"]);
  const tableHeadData = [
    "order-id",
    "product-id",
    "date",
    "total",
    "order-status",
    "payment-status",
    "client",
  ];
  return (
    <table className="hidden" ref={tableRef}>
      <thead>
        <tr>
          {tableHeadData.map((item, index) => (
            <th key={index}>{t(item)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders.length > 0
          ? orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <div>{order.orderId}</div>
                </td>
                <td>
                  {order.orderItems.map((ord, index) => (
                    <div key={index} className="flex justify-between mx-1">
                      {ord.productId ? (
                        <span>{ord.productId._id}</span>
                      ) : (
                        t("deleted-product")
                      )}
                    </div>
                  ))}
                </td>

                <td>{moment(order.createdAt).format("lll")}</td>
                <td>
                  <Price price={order.totalPrice} className="" />
                </td>

                <td>
                  <OrderStatus status={order.orderStatus} />
                </td>
                <td>
                  <PaymentStatus status={order.paymentStatus} />
                </td>
                <td>
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col">
                      {t("full-name")}:{order.firstName} {order.lastName}
                      {"-"}
                      {t("email")}:{order.email}
                    </div>
                  </div>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default ExportExcelOrderData;
