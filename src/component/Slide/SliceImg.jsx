import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";


function SliceImg({ image }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="w-full lg:w-2/3 lg:mx-auto  ">
            <div className="relative mx-auto">
                <Swiper
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".custom_next",
                        prevEl: ".custom_prev"
                    }}
                    loop={true}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {image && image.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className="mx-auto" src={item} alt="err" />
                        </SwiperSlide>
                    ))}
                    <div className="custom_next absolute  p-[5px] py-[20px] bg-[#444444] opacity-50 z-20 top-1/3 md:top-1/2 right-0 ">
                        <FontAwesomeIcon icon={faChevronRight} size="xl" style={{ color: "#ffffff", }} />
                    </div>
                    <div className="custom_prev absolute  p-[5px] py-[20px] bg-[#444444] opacity-50 z-20 top-1/3 md:top-1/2   ">
                        <FontAwesomeIcon icon={faChevronLeft} size="xl" style={{ color: "#ffffff", }} />
                    </div>
                </Swiper>
            </div>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                navigation={{
                    nextEl: ".custom_next_thumb",
                    prevEl: ".custom_prev_thumb"
                }}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {image && image.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img className="max-w-[80px] md:max-w-[150px] mx-auto" src={item} alt="err" />
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
}

export default SliceImg;