import About from "../../components/About/About";
import CallToAction from "../../components/CallToAction/CallToAction";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider> 
            <About></About>
            <Services></Services>
            <CallToAction></CallToAction>       
        </div>
    );
};

export default Home;