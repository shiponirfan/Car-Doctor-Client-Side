// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// Import Slider Photo
import slideImg1 from "../../assets/images/banner/5.jpg";
import slideImg2 from "../../assets/images/banner/4.jpg";
import slideImg3 from "../../assets/images/banner/3.jpg";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const HomeSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper h-[700px] group"
      >
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              src={slideImg1}
              alt="slide1"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-0 left-0 h-full w-full flex items-center text-white bg-gradient-to-r from-car-black to-[rgba(21, 21, 21, 0.00) 100%)] rounded-xl">
              <div className="max-w-lg m-24 space-y-8">
                <h2 className="text-6xl font-bold pr-10 leading-tight">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="space-x-5">
                  <Link to="/">
                    <button className="text-lg font-semibold hover:text-car-primary py-4 px-7 border border-car-primary rounded-md bg-car-primary hover:bg-transparent text-white duration-300">
                      Appointment
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="text-lg font-semibold  py-4 px-7 border border-white hover:border-car-primary rounded-md hover:bg-car-primary text-white duration-300">
                      Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              src={slideImg2}
              alt="slide1"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-0 left-0 h-full w-full flex items-center text-white bg-gradient-to-r from-car-black to-[rgba(21, 21, 21, 0.00) 100%)] rounded-xl">
              <div className="max-w-lg m-24 space-y-8">
                <h2 className="text-6xl font-bold pr-10 leading-tight">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="space-x-5">
                  <Link to="/">
                    <button className="text-lg font-semibold hover:text-car-primary py-4 px-7 border border-car-primary rounded-md bg-car-primary hover:bg-transparent text-white duration-300">
                      Appointment
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="text-lg font-semibold  py-4 px-7 border border-white hover:border-car-primary rounded-md hover:bg-car-primary text-white duration-300">
                      Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              src={slideImg3}
              alt="slide1"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-0 left-0 h-full w-full flex items-center text-white bg-gradient-to-r from-car-black to-[rgba(21, 21, 21, 0.00) 100%)] rounded-xl">
              <div className="max-w-lg m-24 space-y-8">
                <h2 className="text-6xl font-bold pr-10 leading-tight">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="space-x-5">
                  <Link to="/">
                    <button className="text-lg font-semibold hover:text-car-primary py-4 px-7 border border-car-primary rounded-md bg-car-primary hover:bg-transparent text-white duration-300">
                      Appointment
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="text-lg font-semibold  py-4 px-7 border border-white hover:border-car-primary rounded-md hover:bg-car-primary text-white duration-300">
                      Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="p-14 absolute bottom-0 right-0 z-10 flex space-x-5">
          <div className="swiper-button-prev w-16 h-16 bg-white bg-opacity-20 text-white flex justify-center items-center text-2xl rounded-full hover:bg-car-primary duration-300 cursor-pointer">
            <AiOutlineArrowLeft />
          </div>
          <div className="swiper-button-next w-16 h-16 bg-white bg-opacity-20 text-white flex justify-center items-center text-2xl rounded-full hover:bg-car-primary duration-300 cursor-pointer">
            <AiOutlineArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
