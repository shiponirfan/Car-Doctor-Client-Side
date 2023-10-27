import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="font-inter container mx-auto px-6 lg:px-8 dark:bg-gray-900">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;