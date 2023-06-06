import React, { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerItem from "./BannerItem";
import { useSelector } from "react-redux";

const BannerCarousel = () => {
  const { isLoading, images } = useSelector((state) => state.image);
  return (
    <section>
      <div className="-full">
        <Swiper
          style={{
            "--swiper-navigation-size": "28px",
          }}
          className="rounded-b-xl"
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerCarousel;
