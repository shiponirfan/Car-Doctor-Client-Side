import About from "../../components/About/About";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider> 
            <About></About>
            <Services></Services>           
        </div>
    );
};

export default Home;