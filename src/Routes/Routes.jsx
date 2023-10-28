import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import CheckOut from "../pages/CheckOut/CheckOut";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      },
    ]},
]);

export default Routes;