import React from "react";
import { useTranslation } from "react-i18next";
import { Price } from "../../Helpers";

const ItemsTable = ({ order }) => {
  let { t } = useTranslation(["order"]);
  const headData = ["product-name", "quantity", "price", "total"];
  return (
    <div className="col-span-4 border_l rounded-lg p-5">
      <h1 className="mb-4 text_color font-semibold">{t("order-products")}</h1>
      <div className="w-full">
        <div className="overflow-hidden rounded">
          <table className="min-w-full border-collapse">
            <thead className="bg-slate-100 dark:bg-gray-600 border border-gray-200 text_color font-semibold text-sm">
              <tr>
                {headData.map((item, index) => (
                  <th
                    key={index}
                    className="text-left py-4 border border-gray-400 px-4"
                  >
                    {t(item)}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-500 dark:text-gray-300">
              {order?.orderItems?.map((item) => (
                <tr key={item._id}>
                  <td className="flex text-sm font-semibold justify-around items-center py-3 border border-gray-300">
                    <img
                      src={item.productId.images[0]?.url}
                      className="h-10"
                      alt={item.productId.name}
                    />
                    <p>{item.productId.name}</p>
                  </td>
                  <td className="text-center py-3 border border-gray-300">
                    <p className="">{item.quantity}</p>
                  </td>
                  <td className="text-center py-3 border border-gray-300">
                    <Price price={item.productId?.price} className="" />
                  </td>
                  <td className="text-center py-3 border border-gray-300">
                    <Price
                      price={item.quantity * item.productId?.price}
                      className=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;
