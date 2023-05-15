import {
  Avatar,
  Checkbox,
  IconButton,
  MenuItem,
  Popover,
  TablePagination,
} from "@mui/material";
import moment from "moment";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiDotsVerticalRounded, BiEdit } from "react-icons/bi";
import { BsEyeFill, BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { OrderStatus, PaymentStatus, Price } from "../Helpers";

const TableBody = ({
  orders,
  handleSelectAll,
  selectedOrderIds,
  filteredOrders,
  handleSelectOne,
  handleDeleteOrder,
  tableRef,
}) => {
  let { t } = useTranslation(["order"]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(null);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };
  const tableHeadData = [
    "order",
    "product",
    "order-status",
    "total",
    "date",
    "is-payment",
    "client",
    "actions",
  ];
  return (
    <section>
      <table className="min-w-max w-full table-auto rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left dark:bg-[#232338] text-gray-500 dark:text-gray-200 text-xs font-light rounded-t-lg uppercase">
            <th className="text-center">
              <Checkbox
                checked={selectedOrderIds.length === orders.length}
                color="primary"
                indeterminate={
                  selectedOrderIds.length > 0 &&
                  selectedOrderIds.length < orders.length
                }
                onChange={handleSelectAll}
              />
            </th>
            {tableHeadData.map((item, index) => (
              <th key={index} className="px-0">
                {t(item)}
              </th>
            ))}
          </tr>
        </thead>

        {filteredOrders.length ? (
          <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
            {filteredOrders
              .map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 font-semibold hover:dark:bg-gray-600 transition_normal"
                >
                  <td className="py-3 flex_center">
                    <Checkbox
                      checked={selectedOrderIds.indexOf(order._id) !== -1}
                      onChange={(event) => handleSelectOne(event, order._id)}
                      value="true"
                    />
                  </td>
                  <td className="py-3 px-0 whitespace-nowrap">
                    <div className="flex justify-start items-center hover:text-purple-600">
                      <Link to={`/dashboard/order/${order._id}`}>
                        {"#"}
                        {order.orderId}
                      </Link>
                    </div>
                  </td>
                  <td className="py-3 px-0 text-left">
                    <div className="flex justify-start items-center">
                      {order.orderItems.map((ord, index) => (
                        <div key={index} className="flex justify-between mx-1">
                          {ord.productId ? (
                            <img
                              src={ord.productId.images[0].url}
                              className="h-10"
                              alt="Order"
                            />
                          ) : (
                            t("deleted-product")
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-0 text-left">
                    <div className="flex justify-start items-center">
                      <OrderStatus status={order.orderStatus} />
                    </div>
                  </td>

                  <td className="py-3 px-0 text-left">
                    <div className="flex justify-start items-center">
                      <Price price={order.totalPrice} className="" />
                    </div>
                  </td>
                  <td className="py-3 px-0 text-left">
                    <div className="flex justify-start items-center text-sm">
                      <span>{moment(order.createdAt).format("lll")}</span>
                    </div>
                  </td>

                  <td className="py-3 px-0 text-left">
                    <div className="flex justify-start items-center">
                      <PaymentStatus status={order.paymentStatus} />
                    </div>
                  </td>
                  <td className="py-3 px-0 text-left">
                    <div className="flex justify-start items-center">
                      <div className="mr-2">
                        <Avatar
                          src={order.user?.avatar?.url || "/images/profile.png"}
                          alt={order.firstName}
                          size="sm"
                        />
                      </div>
                      <div className="flex flex-col">
                        <Link
                          to={`/user/${order.user?._id || ""}`}
                          className="transition_normal hover:text-purple-500"
                        >
                          {order.firstName} {order.lastName}
                        </Link>
                        <span className="text-gray-500 text-[12px]">
                          {order.email}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-0 text-left">
                    {/* <IconButton
                      size="large"
                      color="inherit"
                      onClick={handleOpenMenu}
                    >
                      <BiDotsVerticalRounded />
                    </IconButton> */}

                    <div className="flex order-center justify-start">
                      <Link
                        to={`/dashboard/order/${order._id}`}
                        className="cursor-pointer w-5 mr-3 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </Link>
                      <Link to={`/dashboard/order/${order._id}`}>
                        <div className="cursor-pointer w-5 mr-3 transform hover:text-purple-500 hover:scale-110">
                          <FiEdit className="text-lg" />
                        </div>
                      </Link>
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="cursor-pointer w-5 mr-3 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
              .reverse()}
          </tbody>
        ) : (
          <tbody className="w-full flex_center relative p-5">
            <tr className="w-full">
              <td>{t("not-found")}</td>
            </tr>
          </tbody>
        )}
      </table>
      {filteredOrders.length > 0 && (
        <div className="flex justify-end">
          <TablePagination
            labelRowsPerPage={t("pagination-table")}
            component="div"
            count={filteredOrders.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </div>
      )}

      {/* <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <div className="flex items-center text-gray-500 justify-between">
            <BsEyeFill className="mr-1 text-lg" />
            <span>{t("view")}</span>
          </div>
        </MenuItem>
        <MenuItem>
          <Link
            to={`/dashboard/order/${order._id}`}
            className="flex items-center text-gray-500"
          >
            <BiEdit className="mr-1 text-lg" />
            {t("edit")}
          </Link>
        </MenuItem>

        <MenuItem>
          <div className="flex items-center text-red-500">
            <BsTrashFill className="mr-1 text-lg" />
            {t("delete")}
          </div>
        </MenuItem>
      </Popover> */}
    </section>
  );
};

export default TableBody;
