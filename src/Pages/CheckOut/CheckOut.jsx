import { useLoaderData } from "react-router-dom";
import serviceimg from "../../assets/images/checkout/checkout.png";
import { toast } from "react-toastify";
const CheckOut = () => {
  const service = useLoaderData();
  const { _id, img, price, title } = service;
  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const number = form.number.value;
    const email = form.email.value;
    const message = form.message.value;
    const checkoutData = {
      img,
      title,
      price,
      date,
      email,
      serviceId: _id,
      status: "Pending",
      number,
      name,
      message,
    };
    fetch("http://localhost:5000/cartDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Checkout Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
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
          <h2 className="text-5xl font-bold text-white">Check Out</h2>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-car-primary rounded-tl-xl rounded-tr-xl">
          <h3 className="font-medium text-xl text-white py-4 px-12">
            Home/Checkout
          </h3>
        </div>
      </div>
      <div className="my-32 p-24 bg-[#F3F3F3] rounded-xl">
        <form onSubmit={handleCheckout} className="space-y-6">
          <div className="flex gap-6">
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="input w-full h-16"
            />
            <input
              type="date"
              name="date"
              placeholder="Last Name"
              className="input w-full h-16"
            />
          </div>
          <div className="flex gap-6">
            <input
              type="number"
              name="number"
              placeholder="Your Phone"
              className="input w-full h-16"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input w-full h-16"
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full h-64"
            placeholder="Your Message"
          ></textarea>
          <input
            type="submit"
            value="Order Confirm"
            className="input w-full h-16 bg-car-primary text-white text-xl font-semibold hover:bg-car-black duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
