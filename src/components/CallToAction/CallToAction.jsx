import icon1 from "../../assets/icons/time.svg";
import icon2 from "../../assets/icons/message.svg";
import icon3 from "../../assets/icons/map.svg";
const CallToAction = () => {
  return (
    <div className="text-white bg-car-black rounded-xl flex items-center justify-around h-64 p-16 my-32">
      <div className="gap-5 flex justify-center items-center">
        <img className="w-10 h-10" src={icon1} alt="icon" />
        <div>
          <h4 className="font-medium mb-2">We are open monday-friday</h4>
          <h3 className="font-bold text-2xl">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="gap-5 flex justify-center items-center">
        <img className="w-10 h-10" src={icon2} alt="icon" />
        <div>
          <h4 className="font-medium mb-2">Have a question?</h4>
          <h3 className="font-bold text-2xl">+2546 251 2658</h3>
        </div>
      </div>
      <div className="gap-5 flex justify-center items-center">
        <img className="w-10 h-10" src={icon3} alt="icon" />
        <div>
          <h4 className="font-medium mb-2">Need a repair? our address</h4>
          <h3 className="font-bold text-2xl">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
