import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { Price } from "../Helpers";

const ExportExcelProducts = ({ tableRef, products }) => {
  let { t } = useTranslation(["product"]);
  const tableHeadData = [
    "product-id",
    "name",
    "price",
    "brand",
    "rating",
    "in-stock",
    "sold",
    "created-at",
    "created-by",
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
        {products.length > 0
          ? products.map((product, index) => (
              <tr key={index}>
                <td>
                  <div>{product._id.slice(0, 8)}</div>
                </td>
                <td>{product.name}</td>
                <td>
                  <Price price={product.price} className="" />
                </td>

                <td>{product.brand}</td>
                <td>{product.ratings}</td>
                <td>{product.inStock}</td>
                <td>{product.sold}</td>
                <td>{moment(product.createdAt).format("lll")}</td>
                <td>
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col">
                      {product.createdBy.name}{" "}
                      {product.createdBy.lastName}
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

export default ExportExcelProducts;
