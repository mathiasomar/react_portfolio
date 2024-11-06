import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { clientReviews } from "../constants";
import { useMediaQuery } from "react-responsive";

const Clients = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  return (
    <section className="c-space my-20">
      <h3 className="head-text mb-4">Hear from My Clients</h3>
      <div className="w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={isSmall ? 1 : isMobile ? 1 : isTablet ? 3 : 3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {clientReviews.map(({ id, name, review, img, position }) => (
            <SwiperSlide key={id} className="swiper-slide">
              <div>
                <p className="text-white font-light">{review}</p>

                <div className="client-content">
                  <div className="flex gap-3">
                    <img
                      src={img}
                      alt={name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-white-800">{name}</p>
                      <p className="text-white-500 md:text-base text-sm">
                        {position}
                      </p>
                    </div>
                  </div>
                  <div className="flex self-end items-center gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index}
                        src="/assets/star.png"
                        alt="star"
                        className="h-3 w-3"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </div>
            <div className="swiper-button-next slider-arrow ">
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
