import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("Axios Interceptors Response: ", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          logoutUser()
            .then(() => {
              navigate("/login");
            })
            .then((error) => {
              console.log(error);
            });
        }
      }
    );
  }, [logoutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
