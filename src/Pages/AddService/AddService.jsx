import serviceimg from "../../assets/images/checkout/checkout.png";
const AddService = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-80 ">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={serviceimg}
            alt="Check Out"
          />
        </div>
        <div className="absolute px-28 flex items-center  top-0 left-0 w-full h-full bg-gradient-to-r from-car-black to-[rgba(21, 21, 21, 0.00) 100%)] rounded-xl">
          <h2 className="text-5xl font-bold text-white">Add New Service</h2>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-car-primary rounded-tl-xl rounded-tr-xl">
          <h3 className="font-medium text-xl text-white py-4 px-12">
            Home/Service
          </h3>
        </div>
      </div>
      <div className="my-32 p-24 bg-[#F3F3F3] rounded-xl">
        <form className="space-y-6">
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="input w-full h-16"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input w-full h-16"
            />
          </div>
          <div className="flex gap-6">
            <input
              type="number"
              placeholder="Your Phone"
              className="input w-full h-16"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input w-full h-16"
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-64"
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="input w-full h-16 bg-car-primary text-white text-xl font-semibold hover:bg-car-black duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
