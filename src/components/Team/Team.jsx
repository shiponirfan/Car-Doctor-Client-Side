// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// Import Team Images
import team1 from "../../assets/images/team/1.jpg";
import team2 from "../../assets/images/team/2.jpg";
import team3 from "../../assets/images/team/3.jpg";
// Import Social Icon
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Team = () => {
  return (
    <div className="py-32">
      <div className="space-y-5 text-center max-w-3xl mx-auto mb-14">
        <h3 className="font-bold text-xl text-car-primary">Team</h3>
        <h2 className="font-bold text-5xl text-car-black">Meet Our Team</h2>
        <p className="text-base text-car-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="p-6 space-y-5 rounded-xl border hover:shadow-lg duration-300 text-center">
              <div className="rounded-xl w-full h-80">
                <img
                  src={team1}
                  alt="Team Image"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <h3 className="font-bold text-2xl text-car-black">
                Car Engine Plug
              </h3>
              <h2 className="font-semibold text-xl text-car-primary">
                Engine Expert
              </h2>
              <div className="flex gap-3 justify-center items-center">
                <Link to="/">
                  <img src={facebook} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={twitter} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={linkedin} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={instagram} alt="social icon" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 space-y-5 rounded-xl border hover:shadow-lg duration-300 text-center">
              <div className="rounded-xl w-full h-80">
                <img
                  src={team2}
                  alt="Team Image"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <h3 className="font-bold text-2xl text-car-black">
                Car Engine Plug
              </h3>
              <h2 className="font-semibold text-xl text-car-primary">
                Engine Expert
              </h2>
              <div className="flex gap-3 justify-center items-center">
                <Link to="/">
                  <img src={facebook} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={twitter} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={linkedin} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={instagram} alt="social icon" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 space-y-5 rounded-xl border hover:shadow-lg duration-300 text-center">
              <div className="rounded-xl w-full h-80">
                <img
                  src={team3}
                  alt="Team Image"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <h3 className="font-bold text-2xl text-car-black">
                Car Engine Plug
              </h3>
              <h2 className="font-semibold text-xl text-car-primary">
                Engine Expert
              </h2>
              <div className="flex gap-3 justify-center items-center">
                <Link to="/">
                  <img src={facebook} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={twitter} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={linkedin} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={instagram} alt="social icon" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 space-y-5 rounded-xl border hover:shadow-lg duration-300 text-center">
              <div className="rounded-xl w-full h-80">
                <img
                  src={team2}
                  alt="Team Image"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <h3 className="font-bold text-2xl text-car-black">
                Car Engine Plug
              </h3>
              <h2 className="font-semibold text-xl text-car-primary">
                Engine Expert
              </h2>
              <div className="flex gap-3 justify-center items-center">
                <Link to="/">
                  <img src={facebook} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={twitter} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={linkedin} alt="social icon" />
                </Link>
                <Link to="/">
                  <img src={instagram} alt="social icon" />
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 rounded-full text-2xl cursor-pointer hover:bg-car-primary hover:text-white duration-300 bg-gray-100 w-16 h-16 flex justify-center items-center z-50 swiper-button-next">
            <AiOutlineArrowRight />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 rounded-full text-2xl cursor-pointer hover:bg-car-primary hover:text-white duration-300 bg-gray-100 w-16 h-16 flex justify-center items-center z-50 swiper-button-prev">
            <AiOutlineArrowLeft />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
