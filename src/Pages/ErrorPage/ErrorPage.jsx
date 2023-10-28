import errorimg from "../../assets/icons/error.svg";
import Navbar from "../../components/Navbar/Navbar";
const ErrorPage = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8">
      <Navbar></Navbar>
      <div className="flex justify-center items-center py-32">
        <img src={errorimg} alt="error image" />
      </div>
    </div>
  );
};

export default ErrorPage;
