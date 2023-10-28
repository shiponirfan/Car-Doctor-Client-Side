// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// testimonial image
import testimonial1 from "../../assets/images/testimonial/testimonials1.jpg";
import testimonial2 from "../../assets/images/testimonial/testimonials2.jpg";
import quote from "../../assets/icons/quote.svg";
const Testimonial = () => {
  return (
    <div className="py-32">
      <div className="space-y-5 text-center max-w-3xl mx-auto mb-14">
        <h3 className="font-bold text-xl text-car-primary">Testimonial</h3>
        <h2 className="font-bold text-5xl text-car-black">
          What Customer Says
        </h2>
        <p className="text-base text-car-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          //   spaceBetween={24}
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
          <SwiperSlide className="px-8">
            <div className="p-14 space-y-5 rounded-xl border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <div className="rounded-xl w-16 h-16">
                    <img
                      src={testimonial1}
                      alt="Testimonial Image"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-car-black">
                      Awlad Hossain
                    </h2>
                    <h3 className="text-xl font-semibold text-car-gray">
                      Businessman
                    </h3>
                  </div>
                </div>
                <div className="w-14 h-14">
                  <img
                    src={quote}
                    alt="Quote Image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.{" "}
              </p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="p-14 space-y-5 rounded-xl border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <div className="rounded-xl w-16 h-16">
                    <img
                      src={testimonial2}
                      alt="Testimonial Image"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-car-black">
                      Awlad Hossain
                    </h2>
                    <h3 className="text-xl font-semibold text-car-gray">
                      Businessman
                    </h3>
                  </div>
                </div>
                <div className="w-14 h-14">
                  <img
                    src={quote}
                    alt="Quote Image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.{" "}
              </p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="p-14 space-y-5 rounded-xl border">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <div className="rounded-xl w-16 h-16">
                    <img
                      src={testimonial1}
                      alt="Testimonial Image"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-car-black">
                      Awlad Hossain
                    </h2>
                    <h3 className="text-xl font-semibold text-car-gray">
                      Businessman
                    </h3>
                  </div>
                </div>
                <div className="w-14 h-14">
                  <img
                    src={quote}
                    alt="Quote Image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.{" "}
              </p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
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

export default Testimonial;
