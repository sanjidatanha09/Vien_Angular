import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";
import Menu from "../Pages/Menu";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rita",
        element: <User />,
      },
      {
        path: "/m",
        element: <Menu />,
      },
     
    ],
  },


]);

export default Router;
