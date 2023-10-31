import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const Services = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const [loadService, setLoadService] = useState(true);
  useEffect(() => {
    axiosSecure.get("/services").then((res) => {
      setServices(res.data);
      setLoadService(false);
    });
  }, [axiosSecure]);
  return (
    <div>
      <div className="space-y-5 text-center max-w-3xl mx-auto">
        <h3 className="font-bold text-xl text-car-primary">Service</h3>
        <h2 className="font-bold text-5xl text-car-black">Our Service Area</h2>
        <p className="text-base text-car-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      {loadService ? (
        <div className="w-full dark:bg-gray-900 z-50 h-48 flex justify-center items-center">
          <span className="loading loading-ring w-20 text-brand-primary dark:text-yellow-400"></span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-14">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      )}

      <div className="text-center">
        <Link to="/">
          <button className="text-lg font-semibold text-car-primary py-4 px-7 border border-car-primary rounded-md hover:bg-car-primary hover:text-white duration-300">
            More Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
