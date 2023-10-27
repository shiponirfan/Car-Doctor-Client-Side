import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-14">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
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
