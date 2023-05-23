import React, { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { urls } from "../../data/list";

const Urls = () => {
  const { t } = useTranslation(["home"]);
  const { isLoading, images } = useSelector((state) => state.image);
  return (
    <section className="border-2 border-t-gray-200">
      <div className="container-full text-center my-12 grid grid-cols-4 gap-x-8">
        {urls.map((item, index) => (
          <a href={item.href} className="" target="_blank">
            <img src={item.img} alt="" className="h-14" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Urls;
