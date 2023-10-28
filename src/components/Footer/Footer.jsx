import { Link } from "react-router-dom";
// Import Logo & Icons
import logo from "../../assets/logoFooter.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-car-black py-32">
      <div className=" container mx-auto px-6 lg:px-8 text-[#E8E8E8] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
        <div className="space-y-5">
          <img src={logo} alt="Car Doctor Logo" />
          <p>
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial
          </p>
          <div className="flex gap-3 items-center">
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
        <div>
          <h2 className="text-white font-bold text-xl mb-10">About</h2>
          <div className="flex flex-col space-y-3">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl mb-10">Company</h2>
          <div className="flex flex-col space-y-3">
            <Link to="/">Why Car Doctor</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl mb-10">Support</h2>
          <div className="flex flex-col space-y-3">
            <Link to="/">Support Center</Link>
            <Link to="/">Feedback</Link>
            <Link to="/">Accesbility</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
