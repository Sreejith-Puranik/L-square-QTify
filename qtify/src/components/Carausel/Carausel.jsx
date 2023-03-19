import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carauselleftnavigation from "../Carauselleftnavigation/Carauselleftnavigation";
import Carauselrightnavigation from "../Carauselrightnavigation/Carauselrightnavigation";
// import Card from "../Card/Card";

export default function Carausel({ data, renderComponent }) {
  // useEffect(() => {
  //   const swiper = useSwiper();
  //   swiper.slideTo(0);
  // }, []);

  return (
    <div>
      <Swiper
        spaceBetween={40}
        initialSlide={0}
        slidesPerView="auto"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* {props.carddet.map((card) => (
        <SwiperSlide>
          <Card
            albumlogo={card.image}
            follows={card.follows}
            cardtitle={card.title}
          />
        </SwiperSlide>
      ))} */}
        <Carauselleftnavigation />
        <Carauselrightnavigation />
        {data.map((ele) => (
          <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
