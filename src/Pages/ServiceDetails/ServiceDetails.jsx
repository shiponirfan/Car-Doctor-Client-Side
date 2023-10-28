import { Link, useLoaderData } from "react-router-dom";
import videoImg1 from "../../assets/images/banner/2.jpg";
import serviceimg from "../../assets/images/checkout/checkout.png";
import frame from "../../assets/icons/Frame.svg";
import file from "../../assets/icons/file.svg";
import logo from "../../assets/logoFooter.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, description, img, price, title, facility } = service;
  return (
    <div>
      <div className="relative">
        <div className="w-full h-80 ">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={serviceimg}
            alt="service img"
          />
        </div>
        <div className="absolute px-28 flex items-center  top-0 left-0 w-full h-full bg-gradient-to-r from-car-black to-[rgba(21, 21, 21, 0.00) 100%)] rounded-xl">
          <h2 className="text-5xl font-bold text-white">Service Details</h2>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-car-primary rounded-tl-xl rounded-tr-xl">
          <h3 className="font-medium text-xl text-white py-4 px-12">
            Home/Service Details
          </h3>
        </div>
      </div>
      <div className="flex gap-6 pt-24 pb-32">
        <div className="w-2/3">
          <img
            className="w-full h-[500px] object-cover rounded-xl mb-14"
            src={img}
            alt={title}
          />
          <h2 className="text-4xl font-bold text-car-black">{title}</h2>
          <p className="py-8 text-car-gray">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facility?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#F3F3F3] p-10 rounded-xl border-t-2 border-car-primary"
                >
                  <h2 className="text-xl font-bold text-car-black mb-3">
                    {item?.name}
                  </h2>
                  <p className="text-car-gray">{item?.details}</p>
                </div>
              );
            })}
          </div>
          <p className="py-8 text-car-gray">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <h2 className="text-4xl font-bold text-car-black">
            3 Simple Steps to Process
          </h2>
          <p className="py-8 text-car-gray">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-5 border rounded-xl p-9 text-center">
              <h4 className="bg-car-primary mx-auto bg-opacity-50 w-20 h-20 flex justify-center items-center rounded-full">
                <span className="font-bold text-xl text-white bg-car-primary w-14  h-14 flex justify-center items-center rounded-full">
                  01
                </span>
              </h4>
              <h2 className="font-bold text-xl text-car-black">Step One</h2>
              <p className="text-car-gray">It uses a dictionary of over 200</p>
            </div>
            <div className="space-y-5 border rounded-xl p-9 text-center">
              <h4 className="bg-car-primary mx-auto bg-opacity-50 w-20 h-20 flex justify-center items-center rounded-full">
                <span className="font-bold text-xl text-white bg-car-primary w-14  h-14 flex justify-center items-center rounded-full">
                  02
                </span>
              </h4>
              <h2 className="font-bold text-xl text-car-black">Step Two</h2>
              <p className="text-car-gray">It uses a dictionary of over 200</p>
            </div>
            <div className="space-y-5 border rounded-xl p-9 text-center">
              <h4 className="bg-car-primary mx-auto bg-opacity-50 w-20 h-20 flex justify-center items-center rounded-full">
                <span className="font-bold text-xl text-white bg-car-primary w-14  h-14 flex justify-center items-center rounded-full">
                  03
                </span>
              </h4>
              <h2 className="font-bold text-xl text-car-black">Step Three</h2>
              <p className="text-car-gray">It uses a dictionary of over 200</p>
            </div>
          </div>
          <div className="relative h-[500px] mt-8">
            <img
              className="rounded-xl w-full h-full object-cover"
              src={videoImg1}
              alt="Video Image"
            />
            <img
              className="rounded-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer"
              src={frame}
              alt="Video Image"
            />
          </div>
        </div>
        <div className="w-1/3 space-y-8">
          <div className="bg-[#F3F3F3] p-10 space-y-5 rounded-xl">
            <h2 className="text-2xl font-bold text-car-black">Services</h2>
            <div className="font-semibold group text-car-black cursor-pointer hover:text-white bg-white hover:bg-car-primary rounded-xl duration-300 p-5 flex items-center justify-between">
              <h3>Full Car Repair</h3>
              <AiOutlineArrowRight className="text-xl text-car-primary group-hover:text-white duration-300" />
            </div>
            <div className="font-semibold group text-car-black cursor-pointer hover:text-white bg-white hover:bg-car-primary rounded-xl duration-300 p-5 flex items-center justify-between">
              <h3>Engine Repair</h3>
              <AiOutlineArrowRight className="text-xl text-car-primary group-hover:text-white duration-300" />
            </div>
            <div className="font-semibold group text-car-black cursor-pointer hover:text-white bg-white hover:bg-car-primary rounded-xl duration-300 p-5 flex items-center justify-between">
              <h3>Automatic Services</h3>
              <AiOutlineArrowRight className="text-xl text-car-primary group-hover:text-white duration-300" />
            </div>
            <div className="font-semibold group text-car-black cursor-pointer hover:text-white bg-white hover:bg-car-primary rounded-xl duration-300 p-5 flex items-center justify-between">
              <h3>Engine Oil Change</h3>
              <AiOutlineArrowRight className="text-xl text-car-primary group-hover:text-white duration-300" />
            </div>
            <div className="font-semibold group text-car-black cursor-pointer hover:text-white bg-white hover:bg-car-primary rounded-xl duration-300 p-5 flex items-center justify-between">
              <h3>Battery Charge</h3>
              <AiOutlineArrowRight className="text-xl text-car-primary group-hover:text-white duration-300" />
            </div>
          </div>
          <div className="bg-car-black p-10 rounded-xl text-white">
            <h2 className="font-bold text-2xl mb-6">Download</h2>
            <div className="flex justify-between  items-center mb-6">
              <div className="flex justify-center items-center gap-4">
                <img src={file} alt="file icon" />
                <div>
                  <h3 className="font-semibold text-lg">Our Brochure</h3>
                  <h4 className="text-[#A2A2A2]">Download</h4>
                </div>
              </div>
              <div className="w-14 h-14 flex justify-center items-center hover:bg-white duration-300 hover:text-car-primary cursor-pointer bg-car-primary rounded-xl text-2xl">
                <AiOutlineArrowRight className="text-2xl" />
              </div>
            </div>
            <div className="flex justify-between  items-center">
              <div className="flex justify-center items-center gap-4">
                <img src={file} alt="file icon" />
                <div>
                  <h3 className="font-semibold text-lg">Company Details</h3>
                  <h4 className="text-[#A2A2A2]">Download</h4>
                </div>
              </div>
              <div className="w-14 h-14 flex justify-center items-center hover:bg-white duration-300 hover:text-car-primary cursor-pointer bg-car-primary rounded-xl text-2xl">
                <AiOutlineArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="bg-car-black px-20 pt-20 pb-28 rounded-xl text-white space-y-5 text-center">
            <img className="w-28 mx-auto" src={logo} alt="Car Doctor Logo" />
            <h2 className="text-xl font-bold px-10">
              Need Help? We Are Here To Help You
            </h2>
            <div className="bg-white py-10 rounded-xl relative">
              <h3 className="text-xl font-bold text-car-black">
                <span className="text-car-primary">Car Doctor</span> Special
              </h3>
              <h4 className="text-car-gray">
                Save up to{" "}
                <span className="text-car-primary font-bold">60% off</span>
              </h4>
              <Link to="/">
                <button className=" absolute -bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-semibold  p-4 border border-car-primary rounded-md bg-car-primary text-white duration-300">
                  Get A Quote
                </button>
              </Link>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-car-black">Price ${price}</h2>
          <Link to={`/checkout/${_id}`}>
            <button className="text-lg mt-8 font-semibold w-full p-4 border hover:bg-car-black border-car-primary rounded-md bg-car-primary text-white duration-300">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
