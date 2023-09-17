import slideImg1 from "../../assets/img/slide-img1.webp"
import slideImg2 from "../../assets/img/slide-img2.webp"
import slideImg3 from "../../assets/img/slide-img3.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//import required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css/bundle";

function Slide() {
    return (
        <div className="relative group">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: ".custom_next",
                    prevEl: ".custom_prev"
                }}
                modules={[Navigation, Autoplay, A11y]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src={slideImg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImg3} alt="" />
                </SwiperSlide>
            </Swiper>
            <div className="custom_next absolute z-0 p-[5px] py-[20px] bg-[#444444] opacity-50 group-hover:z-10 top-1/2 right-[20px] ">
                <FontAwesomeIcon icon={faChevronRight} size="2xl" style={{ color: "#ffffff", }} />
            </div>
            <div className="custom_prev absolute z-0 p-[5px] py-[20px] bg-[#444444] opacity-50 group-hover:z-10 top-1/2 left-[20px]  ">
                <FontAwesomeIcon icon={faChevronLeft} size="2xl" style={{ color: "#ffffff", }} />
            </div>
        </div>
    );
}

export default Slide;