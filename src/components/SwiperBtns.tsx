import React from "react";
import { useSwiper } from "swiper/react";
import {
  PiCaretLeftBold,
  PiCaretRightBold,
} from "react-icons/pi";

const SwiperBtns =
  () => {
    const swiperButton =
      useSwiper();
    return (
      <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-normal ">
        <button
          className=" bg-black text-white text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all"
          onClick={() =>
            swiperButton.slidePrev()
          }
        >
          <PiCaretLeftBold />
        </button>
        <button
          className=" bg-black text-white text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all"
          onClick={() =>
            swiperButton.slideNext()
          }
        >
          <PiCaretRightBold />
        </button>
      </div>
    );
  };

export default SwiperBtns;
