import {
  Breadcrumbs,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../../redux/product";
import { HelmetTitle } from "../../../utils";
import { Layout } from "../../Layouts";
import ImagesThumnails from "./ImagesThumnails";
import BasicData from "./BasicData";
import Reviews from "./Reviews";

const ProductDetails = () => {
  let { t } = useTranslation(["product"]);
  const { product, reviews, isLoading } = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(2);
  const descrRef = useRef(null);

  const handleTabsChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleScrollToReviews = async () => {
    if (activeTab === 0) {
      setActiveTab(1);
    }
    await descrRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToDescr = async () => {
    setActiveTab(0);
    descrRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    dispatch(getProduct(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);
  console.log(reviews);
  return (
    <>
      <HelmetTitle title={`${product?.name}`} />
      <Layout>
        {!isLoading && product ? (
          <div className="container-full md:px-5">
            <div className="flex_betwen mb-8">
              <h1 className="text-2xl font-semibold">{t("product-detail")}</h1>
              <Breadcrumbs aria-label="breadcrumb">
                <Link to={"/dashboard"}>{t("overview")}</Link>
                <Link to={"/dashboard/products"}>{t("all-products")}</Link>
                <Link className="text-gray-800" to={`/product/${product._id}`}>
                  {product.name}
                </Link>
              </Breadcrumbs>
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <ImagesThumnails images={product.images} />
              <BasicData product={product} />
            </div>
            <div className="md:mt-8 mt-3 container-full">
              <Tabs
                value={activeTab}
                onChange={handleTabsChange}
                aria-label="product details"
              >
                <Tab label={t("basic-data")} />
                <Tab label={t("descr")} />
                <Tab label={`${t("reviews")} (${reviews.length})`} />
              </Tabs>
              <div>
                {activeTab === 0 && (
                  <div ref={descrRef} className="md:my-5 my-4 md:w-10/12">
                    d
                  </div>
                )}
                {activeTab === 1 && (
                  <div ref={descrRef} className="md:my-5 my-4 md:w-10/12">
                    <div
                      dangerouslySetInnerHTML={{ __html: product.descr }}
                    ></div>
                  </div>
                )}
                {activeTab === 2 && <Reviews reviews={reviews} />}
              </div>
            </div>
          </div>
        ) : (
          <CircularProgress />
        )}
      </Layout>
    </>
  );
};

export default ProductDetails;
