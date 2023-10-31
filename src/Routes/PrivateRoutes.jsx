import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className='absolute left-0 top-0 w-full bg-white dark:bg-gray-900 z-50 h-full flex justify-center items-center'>
        <span className="loading loading-ring w-20 text-brand-primary dark:text-yellow-400"></span>
    </div>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoutes;