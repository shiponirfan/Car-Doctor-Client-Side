import About from "../../components/About/About";
import CallToAction from "../../components/CallToAction/CallToAction";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider> 
            <About></About>
            <Services></Services>
            <CallToAction></CallToAction>    
            <Products></Products>   
        </div>
    );
};

export default Home;