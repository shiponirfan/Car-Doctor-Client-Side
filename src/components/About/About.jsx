import aboutImg1 from "../../assets/images/about_us/person.jpg";
import aboutImg2 from "../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="pt-32 pb-52 flex gap-8 items-center">
      <div className="relative w-1/2">
        <img
          className="max-w-lg h-[550px] object-cover object-left rounded-xl"
          src={aboutImg1}
          alt="about image"
        />
        <img
          className="max-w-xs h-[332px] object-cover rounded-xl border-[10px] border-white absolute top-80 right-[60px]"
          src={aboutImg2}
          alt="about image"
        />
      </div>
      <div className="space-y-6 w-1/2">
        <h3 className="font-bold text-xl text-car-primary">About Us</h3>
        <h2 className="font-bold text-5xl text-car-black">
          We are qualified & of experience in this field
        </h2>
        <p className="text-base text-car-gray">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
        <p className="text-base text-car-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
        <Link to="/">
          <button className="mt-6 text-lg font-semibold hover:text-car-primary py-4 px-7 border border-car-primary rounded-md bg-car-primary hover:bg-transparent text-white duration-300">
            Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
