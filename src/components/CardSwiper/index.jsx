import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./index.scss";

SwiperCore.use([Autoplay, Pagination]);

const CardSwiper = () => {
  const cradList = [
    {
      id: 1,
      card: "https://img-baofun.zhhainiao.com/pcwallpaper_ugc/live/33efe7d5314c65e121c39d89c2cb7fa4.mp4.jpg",
    },
    {
      id: 2,
      card: "https://img-baofun.zhhainiao.com/market/semvideo/f769e22641025432a2dc747c35efaae7_preview.jpg",
    },
    {
      id: 3,
      card: "https://img-baofun.zhhainiao.com/market/133/750c4e56cb120056c9d155b63025c564_preview.jpg",
    },
    {
      id: 4,
      card: "https://img-baofun.zhhainiao.com/market/133/3760b2031ff41ca0bd80bc7a8a13f7bb_preview.jpg",
    },
    {
      id: 5,
      card: "https://img-baofun.zhhainiao.com/market/semvideo/3fc6cdef4427e61be69096c6ebb59a1c_preview.jpg",
    },
    {
      id: 6,
      card: "https://img-baofun.zhhainiao.com/market/133/2366564fa6b83158208eb3181752a8d6_preview.jpg",
    },
    {
      id: 7,
      card: "https://img-baofun.zhhainiao.com/market/133/b99b51e6c7945c9d5565861d397451cb_preview.jpg",
    },
    {
      id: 8,
      card: "https://img-baofun.zhhainiao.com/market/semvideo/6ac24b3f50fda0b1a55f7ff25c6b62af_preview.jpg",
    },
  ];

  return (
    <div className="container">
      <div className="title">走马灯</div>
      <Swiper
        className="swiper_container"
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        autoplay={true}
        pagination={{ clickable: false }}
      >
        {cradList.map((item) => {
          return (
            <div key={item.id}>
              <SwiperSlide className="card" key={item.id}>
                <img src={item.card} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
