import loginImg from "../../assets/images/login/login.svg";
// Import Social Icon
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((user) => {
        if (user?.user) {
          toast.success("Login Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate(location?.state ? location.state : "/");
        }
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex gap-6 items-center pt-10 pb-32">
      <div className="w-1/2">
        <img src={loginImg} alt="Login Image" />
      </div>
      <div className="w-1/2 border p-20  rounded-xl">
        <h2 className="font-semibold text-5xl text-car-black mb-12 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text font-semibold text-lg text-car-black">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered w-full h-16"
            />
          </div>
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text font-semibold text-lg text-car-black">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered w-full h-16"
            />
          </div>
          <input
            type="submit"
            value="Sign In"
            className="input w-full h-16 bg-car-primary text-white text-xl font-semibold hover:bg-car-black duration-300 cursor-pointer"
          />
        </form>
        <div className="text-center">
          <h3 className="text-lg font-medium text-car-black my-8">
            Or Sign In with
          </h3>
          <div className="flex gap-3 justify-center items-center mb-8">
            <button to="/">
              <img src={facebook} alt="social icon" />
            </button>
            <button to="/">
              <img src={linkedin} alt="social icon" />
            </button>
            <button to="/">
              <img src={instagram} alt="social icon" />
            </button>
          </div>
          <h2 className="text-lg text-car-gray">
            Don&apos;t Have an account?{" "}
            <Link className="text-car-primary font-medium" to="/signup">
              Sign Up
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
