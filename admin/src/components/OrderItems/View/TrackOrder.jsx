import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiErrorAlt, BiRefresh } from "react-icons/bi";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { orderStatusData } from "../../../data/OrderTypeData";
import { resetOrderStatus, updateOrderStatus } from "../../../redux/order";
import OrderStatusText from "../../Helpers/OrderStatusText";

const TrackOrder = ({ id }) => {
  let { t } = useTranslation(["order"]);
  const { access_token } = useSelector((state) => state.auth);
  const { isSuccess, order } = useSelector((state) => state.order);
  const [loading, setLoading] = useState(false);
  const [spin, setSpin] = useState(false);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");

  const filteredOrderStatus = orderStatusData.filter((item2) => {
    return !order?.statusHistory.some(
      (item1) => item1.orderStatus === item2.value
    );
  });

  const updateOrderStatusHandle = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      await dispatch(updateOrderStatus({ id, access_token, status }));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const resetOrderStatusHandle = async () => {
    try {
      setSpin(true);
      await dispatch(resetOrderStatus({ id, access_token }));
      if (isSuccess) {
        setSpin(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(order);

  return (
    <div className="col-span-2 border_l rounded-lg p-5">
      <h1 className="mb-4 text_color font-semibold">{t("track-order")}</h1>
      <div className="flex justify-between items-center mb-5 text_color">
        <p className="">
          {t("order-id")}
          {" - #"}
          {order?.orderId}
        </p>
        <Tooltip title={t("reset")}>
          <IconButton onClick={() => resetOrderStatusHandle()}>
            <BiRefresh className={`text-2xl ${spin && "animate-spin"} `} />
          </IconButton>
        </Tooltip>
      </div>
      <ol className="relative ml-4 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {order?.statusHistory?.map((step, index) => (
          <li key={index} className="mb-10 ml-6">
            {step.orderStatus === "Rejected" ? (
              <span className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-red-200 -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <BiErrorAlt className="text-red-600" />
              </span>
            ) : (
              <span className="absolute flex items-center justify-center w-8 bg-green-200 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <BsFillClipboard2CheckFill className="text-green-500" />
              </span>
            )}

            <div className="flex items-center font-semibold mb-2">
              <span className="mr-1">{index + 1}.</span>
              <OrderStatusText status={step.orderStatus} />
            </div>
            <p className="text-sm">{moment(step.date).format("lll")}</p>
          </li>
        ))}
      </ol>
      {filteredOrderStatus.length ? (
        <form onSubmit={updateOrderStatusHandle} className="mt-5 flex">
          <FormControl fullWidth size="medium" sx={{}}>
            <InputLabel _id="demo-simple-select-label">
              {t("select-order-status")}
            </InputLabel>

            <Select
              labelId="demo-simple-select-label"
              _id="demo-simple-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label={t("select-order-status")}
            >
              {filteredOrderStatus.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {t(`${item.name}`)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            size="medium"
            type="submit"
            sx={{
              marginLeft: "15px",
            }}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            ) : (
              `${t("ok")}`
            )}
          </Button>
        </form>
      ) : null}
    </div>
  );
};

export default TrackOrder;
