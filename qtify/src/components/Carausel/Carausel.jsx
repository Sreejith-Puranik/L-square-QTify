import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card";

export default function Carausel(props) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={7}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.carddet.map((card) => (
        <SwiperSlide>
          <Card
            albumlogo={card.image}
            follows={card.follows}
            cardtitle={card.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
