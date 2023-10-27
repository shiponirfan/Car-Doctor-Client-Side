import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { title, image, price } = product;

  return (
    <div className="p-6 space-y-5 rounded-xl border hover:shadow-lg duration-300 text-center">
      <div className="bg-[#F3F3F3] rounded-xl w-full h-60">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full p-6"
        />
      </div>
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
      <h3 className="font-bold text-2xl text-car-black">{title}</h3>
      <h2 className="font-semibold text-xl text-car-primary">
        Price: ${price}
      </h2>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
