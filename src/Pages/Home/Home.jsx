import About from "../../components/About/About";
import CallToAction from "../../components/CallToAction/CallToAction";
import CoreFeatures from "../../components/CoreFeatures/CoreFeatures";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";
import Team from "../../components/Team/Team";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider> 
            <About></About>
            <Services></Services>
            <CallToAction></CallToAction>    
            <Products></Products>  
            <Team></Team> 
            <CoreFeatures></CoreFeatures>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;