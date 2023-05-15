import { Breadcrumbs, Button, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOrder } from "../../../redux/order";
import { HelmetTitle } from "../../../utils";
import Layout from "../../Layouts/Layout";
import ItemsTable from "./ItemsTable";
import ShippingInfo from "./ShippingInfo";
import TrackOrder from "./TrackOrder";
import { MdDelete } from "react-icons/md";

const OrderItem = () => {
  let { t } = useTranslation(["order"]);
  const { isLoading, order } = useSelector((state) => state.order);
  const { access_token } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder({ access_token, id }));
  }, [dispatch, id]);
  return (
    <div>
      <HelmetTitle title={`${t("order")} - #${order?.orderId || "?????"}`} />

      <Layout>
        {!isLoading ? (
          <section>
            <div className="flex_betwen mb-5">
              <h1 className="text-2xl text_color font-semibold">
                {t("order-detail")}
              </h1>
              <Breadcrumbs>
                <Link to={"/dashboard"} className="">
                  {t("home")}
                </Link>
                <Link to={"/dashboard/orders"} className="">
                  {t("all-orders")}
                </Link>
                <Link to={"/"} className="">
                  {t("order")} - #{order?.orderId}
                </Link>
              </Breadcrumbs>
            </div>
            <div className="grid grid-cols-6 gap-x-5">
              <TrackOrder order={order} id={id} />
              <ItemsTable order={order} />
            </div>
            <ShippingInfo order={order} />
            <Button
              variant="contained"
              color="error"
              size="medium"
              // onClick={() => handleSelectedDelete()}
              sx={{
                float: "right",
                marginLeft: "15px",
                marginY: "15px",
                minWidth: "130px",
              }}
              startIcon={<MdDelete />}
            >
              {t("delete")}
            </Button>
          </section>
        ) : (
          <CircularProgress />
        )}
      </Layout>
    </div>
  );
};

export default OrderItem;
