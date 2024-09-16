import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Card from "../Pages/Card/Card";
import Checkout from "../Pages/Checkout/Checkout";
import OrderDetails from "../Pages/OrderDetails/OrderDetails";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import SmallCategory from "../Pages/SamllCategory/SmallCategory";
import Partner from "../Pages/Partner/Partner";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Loader from "../Utils/Loader";
import CookiesPolicy from "../Pages/Help/CookiesPolicy";
import PrivacyPolicy from "../Pages/Help/PrivacyPolicy";
import ReplacementPolicy from "../Pages/Help/ReplacementPolicy";
import Terms from "../Pages/Help/Terms";
import OrderId from "../Pages/OrderIdPage/OrderId";
import ProductData from "../Pages/ProductDetails/ProductData/ProductData";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Blog from "../Pages/Blogs/Blog";
import ForgotPass from "../Pages/Login/ForgotPass";
import TabPolicy from "../Pages/Profile/TabPolicy";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import RelatedProductData from "../Pages/ProductDetails/ProductData/RelatedProduct/RelatedProductData";
import Album from "../Pages/Gallery/Album/Album";
import Gallery from "../Pages/Gallery/Gallery";
import SectionGallery from "../Pages/Gallery/SectionGallery/SectionGallery";
import SelectLogic from "../Pages/Login/SelectLogic";
import SingleCategory from "../Pages/Category/SingleCategory";
import Category from "../Pages/Category/Category/Category";
import TagCategory from "../Pages/AllTag/Tag1/TagCategory/TagCategory";
import SingleTag from "../Pages/AllTag/Tag1/TagCategory/SingleTag";
import NavbarProduct from "../Pages/Product/NavbarProduct/NavbarProduct";
import ShoppingCardBDT from "../Pages/ShoppingCard/ShoppingCardBDT";
import ShoppingCardUSD from "../Pages/ShoppingCard/ShoppingCardUSD";
import User_Dashboard from "../Pages/User_Dashboard/User_Dashboard";
import Orders from "../Pages/User_Dashboard/Orders";
import BDTCart from "../Pages/User_Dashboard/BDTCart";
import USDCart from "../Pages/User_Dashboard/USDCart";
import WishList from "../Pages/User_Dashboard/WishList/WishList";
import MyRating from "../Pages/User_Dashboard/Rating/MyRating";
import ChangePassword from "../Pages/User_Dashboard/ChangePassword";
import Addresses from "../Pages/User_Dashboard/Addresses";
import OrderInformation from "../Pages/User_Dashboard/OrderInformation/OrderInformation";
import Profile from "../Pages/User_Dashboard/Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card",
        element: <Card />,
      },

      {
        path: "/bdt-cart",
        element: <ShoppingCardBDT />,
      },
      {
        path: "/usd-cart",
        element: <ShoppingCardUSD />,
      },

      {
        path: "/bdt-cart/checkout",
        element: <Checkout />,
      },
      {
        path: "/usd-cart/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-summary",
        element: <OrderDetails />,
      },
      {
        path: "/tag",
        element: <TagCategory />,
      },
      {
        path: "/tag/:id",
        element: <SingleTag />,
      },
      {
        path: "/product",
        element: <NavbarProduct />,
      },
      {
        path: "/album",
        element: <Album />,
      },
      {
        path: "/gallery/:id",
        element: <Gallery />,
      },
      {
        path: "/sectionGallery",
        element: <SectionGallery />,
      },
      {
        path: "/logic",
        element: <SelectLogic />,
      },

      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/relatedProductData/:id",
        element: <RelatedProductData />,
      },
      {
        path: "/productData/:id",
        element: <ProductData />,
      },
      {
        path: "/smallCategory",
        element: <SmallCategory />,
      },
      {
        path: "/category/:id",
        element: <SingleCategory />,
      },
      {
        path: "/category",
        element: <Category />,
      },

      {
        path: "/partner",
        element: <Partner />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/loader",
        element: <Loader />,
      },
      {
        path: "/orderId",
        element: <OrderId />,
      },
      {
        path: "/cookies",
        element: <CookiesPolicy />,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/replacementPolicy",
        element: <ReplacementPolicy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },

      {
        path: "/tab",
        element: <TabPolicy></TabPolicy>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blogdetails/:id",
        element: <BlogDetails />,
      },
      // {
      //   path: "/user-profile",
      //   element: <OrderHistory />,
      // },
      // {
      //   path: "/orderInformation/:id",
      //   element: <OrderInformation />,
      // },

      {
        path: "/forgotPass",
        element: <ForgotPass></ForgotPass>,
      },
      {
        path: "/account",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "user",
    element: <User_Dashboard></User_Dashboard>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "order",
        element: <Orders />,
      },
      {
        path: "cart",
        element: <BDTCart />,
      },
      {
        path: "usd-cart",
        element: <USDCart />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "myrating",
        element: <MyRating />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "address",
        element: <Addresses />,
      },
      {
        path: "myrating",
        element: <MyRating />,
      },
      {
        path: "orderInformation/:id",
        element: <OrderInformation />,
      },
    ],
  },
]);

export default Router;
