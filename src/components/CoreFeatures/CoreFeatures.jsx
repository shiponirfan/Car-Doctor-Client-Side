import featuresIcon1 from "../../assets/icons/group.svg";
import featuresIcon2 from "../../assets/icons/timeely.svg";
import featuresIcon3 from "../../assets/icons/person.svg";
import featuresIcon4 from "../../assets/icons/Wrench.svg";
import featuresIcon5 from "../../assets/icons/check.svg";
import featuresIcon6 from "../../assets/icons/deliveryt.svg";
const CoreFeatures = () => {
  return (
    <div>
      <div className="space-y-5 text-center max-w-3xl mx-auto mb-14">
        <h3 className="font-bold text-xl text-car-primary">Core Features</h3>
        <h2 className="font-bold text-5xl text-car-black">Why Choose Us</h2>
        <p className="text-base text-car-gray">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div className="text-center border rounded-xl p-8 hover:bg-car-primary duration-300 group">
          <img
            className="w-20 h-20 mx-auto mb-5 group-hover:brightness-0 group-hover:invert duration-300"
            src={featuresIcon1}
            alt="features icon"
          />
          <h2 className="font-bold text-lg text-car-black group-hover:text-white duration-300">
            Expert Team
          </h2>
        </div>
        <div className="text-center border rounded-xl p-8 hover:bg-car-primary duration-300 group">
          <img
            className="w-20 h-20 mx-auto mb-5 group-hover:brightness-0 group-hover:invert duration-300"
            src={featuresIcon2}
            alt="features icon"
          />
          <h2 className="font-bold text-lg text-car-black group-hover:text-white duration-300">
            Timely Delivery
          </h2>
        </div>
        <div className="text-center border rounded-xl p-8 hover:bg-car-primary duration-300 group">
          <img
            className="w-20 h-20 mx-auto mb-5 group-hover:brightness-0 group-hover:invert duration-300"
            src={featuresIcon3}
            alt="features icon"
          />
          <h2 className="font-bold text-lg text-car-black group-hover:text-white duration-300">
            24/7 Support
          </h2>
        </div>
        <div className="text-center border rounded-xl p-8 hover:bg-car-primary duration-300 group">
          <img
            className="w-20 h-20 mx-auto mb-5 group-hover:brightness-0 group-hover:invert duration-300"
            src={featuresIcon4}
            alt="features icon"
          />
          <h2 className="font-bold text-lg text-car-black group-hover:text-white duration-300">
            Best Equipment
          </h2>
        </div>
        <div className="text-center border rounded-xl p-8 hover:bg-car-primary duration-300 group">
          <img
            className="w-20 h-20 mx-auto mb-5 group-hover:brightness-0 group-hover:invert duration-300"
            src={featuresIcon5}
            alt="features icon"
          />
          <h2 className="font-bold text-lg text-car-black group-hover:text-white duration-300">
            100% Guranty
          </h2>
        </div>
        <div className="text-center border rounded-xl p-8 hover:bg-car-primary duration-300 group">
          <img
            className="w-20 h-20 mx-auto mb-5 group-hover:brightness-0 group-hover:invert duration-300 "
            src={featuresIcon6}
            alt="features icon"
          />
          <h2 className="font-bold text-lg text-car-black group-hover:text-white duration-300">
            Timely Delivery
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
