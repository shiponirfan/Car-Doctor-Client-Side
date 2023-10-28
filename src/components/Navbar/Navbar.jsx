import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { GoSignOut } from "react-icons/go";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout Successfully", {
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
      })
      .then((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li className="text-lg font-semibold text-car-black dark:text-car-primary">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-transparent text-car-primary dark:text-white hover:bg-transparent hover:text-car-primary"
              : "hover:bg-transparent hover:text-car-primary duration-300 dark:hover:text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-semibold text-car-black dark:text-car-primary">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-transparent text-car-primary dark:text-white hover:bg-transparent hover:text-car-primary"
              : "hover:bg-transparent active:bg-yellow-600 hover:text-car-primary duration-300 dark:hover:text-white"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="text-lg font-semibold text-car-black dark:text-car-primary">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-transparent text-car-primary dark:text-white hover:bg-transparent hover:text-car-primary"
              : "hover:bg-transparent hover:text-car-primary duration-300 dark:hover:text-white"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li className="text-lg font-semibold text-car-black dark:text-car-primary">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-transparent text-car-primary dark:text-white hover:bg-transparent hover:text-car-primary"
              : "hover:bg-transparent hover:text-car-primary duration-300 dark:hover:text-white"
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li className="text-lg font-semibold text-car-black dark:text-car-primary">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-transparent text-car-primary dark:text-white hover:bg-transparent hover:text-car-primary"
              : "hover:bg-transparent hover:text-car-primary duration-300 dark:hover:text-white"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="Car Doctor Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-8 menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-5">
        <Link to="/cart">
          <HiOutlineShoppingBag className="text-2xl text-car-black hover:text-car-primary duration-300" />
        </Link>
        <Link to="/search">
          <IoSearchOutline className="text-2xl text-car-black hover:text-car-primary duration-300" />
        </Link>
        {user ? (
          <span onClick={handleLogOut}>
            <GoSignOut className="text-2xl cursor-pointer text-car-black hover:text-car-primary duration-300" />
          </span>
        ) : (
          ""
        )}

        <Link to="/">
          <button className="text-lg font-semibold text-car-primary py-4 px-7 border border-car-primary rounded-md hover:bg-car-primary hover:text-white duration-300">
            Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
