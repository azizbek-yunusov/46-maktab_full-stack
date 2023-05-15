import "../../../assets/styles/swipperThumbs.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";
import { useState } from "react";
import "swiper/css";
import "swiper/css/thumbs";

const ImagesThumnails = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <>
      <main className="block product_detail">
        {images && images[0] && (
          <>
            <Swiper
              loop={true}
              spaceBetween={10}
              modules={[Thumbs]}
              grabCursor={true}
              className="product-images-slider sm:max-h-[450px] sm:max-w-[450px]  border-2 border-gray-300 mb-2 rounded-lg bg-white"
              thumbs={{
                swiper:
                  activeThumb && !activeThumb.destroyed ? activeThumb : null,
              }}
            >
              {images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.url}
                    alt="product images "
                    className="object-cover p-4"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {images.length > 1 ? (
              <Swiper
                onSwiper={setActiveThumb}
                loop={true}
                spaceBetween={20}
                slidesPerView={4}
                modules={[Pagination, Navigation, Thumbs]}
                className="product-images-slider-thumbs"
              >
                {images.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="rounded-lg overflow-hidden w-24 flex_center"
                  >
                    <div className="flex_center">
                      <img
                        src={item.url}
                        alt="product images"
                        className="object-cover p-2 w-20"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : null}
          </>
        )}
      </main>
    </>
  );
};

export default ImagesThumnails;
