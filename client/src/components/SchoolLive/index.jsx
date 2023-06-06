import React, { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SchoolLive = () => {
  const { t } = useTranslation(["home"]);
  const { isLoading, images } = useSelector((state) => state.image);
  return (
    <section>
      <div className="container-full text-center my-12">
        <h1 className="text-violet-900 text-3xl font-semibold mb-10">
          {t("school-live")}
        </h1>
        {/* <Swiper
          style={{
            "--swiper-navigation-size": "28px",
          }}
          className="rounded-xl"
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={4}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full overflow-hidden cursor-pointer flex justify-start items-center">
                <img
                  src={item.image.url}
                  alt={item.name}
                  className="w-full bg-center object-cover h-[180px] rounded-xl select-none bg-gray-200"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <div className="grid grid-cols-4 gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="w-full overflow-hidden cursor-pointer flex justify-start items-center"
            >
              <img
                src={item.image.url}
                alt={item.name}
                className="w-full bg-center object-cover  max-h-[200px] rounded-xl select-none bg-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolLive;
