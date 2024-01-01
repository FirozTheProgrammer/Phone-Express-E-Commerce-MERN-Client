import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import PrivetRouter from "../Provider/PrivetRouter";
import PhoneCollections from "../Pages/PhoneCollections/PhoneCollections";
import ViewDetails from "../Pages/PhoneCollections/ViewDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivetRoute from "../Provider/PrivetRouter";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutPage from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phone-brand.json"),
      },
      {
        path: "/carcollections/:name",
        element: <PhoneCollections></PhoneCollections>,
        loader: () =>
          fetch("https://backend-payj6nn61-firozs-projects.vercel.app/phone"),
      },
      {
        path: "/addproducts",
        element: (
          <PrivetRouter>
            <AddProducts></AddProducts>
          </PrivetRouter>
        ),
      },
      {
        path: "/AboutUs",
        element: <AboutPage></AboutPage>,
      },

      {
        path: "/mycart/",
        element: (
          <PrivetRouter>
            <MyCart></MyCart>
          </PrivetRouter>
        ),
        loader: () =>
          fetch("https://backend-payj6nn61-firozs-projects.vercel.app/phone"),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivetRoute>
            <ViewDetails></ViewDetails>
          </PrivetRoute>
        ),
        loader: () =>
          fetch("https://backend-payj6nn61-firozs-projects.vercel.app/phone"),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivetRouter>
            <UpdateProduct></UpdateProduct>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://backend-payj6nn61-firozs-projects.vercel.app/phone/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
