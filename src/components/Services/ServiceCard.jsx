import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="p-6 space-y-5 rounded-xl border hover:shadow-lg duration-300">
      <img
        src={img}
        alt={title}
        className="w-full h-60 object-cover rounded-xl"
      />
      <h3 className="font-bold text-2xl text-car-black">{title}</h3>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl text-car-primary">
          Price: ${price}
        </h2>
        <Link to={`/service/${_id}`}>
          <AiOutlineArrowRight className="text-car-primary text-2xl hover:text-car-black duration-300" />
        </Link>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default ServiceCard;
