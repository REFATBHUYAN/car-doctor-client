import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";
import Booking from "../pages/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/signup',
            element: <Signup></Signup>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/checkout/:id',
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute> ,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/bookings',
            element: <PrivateRoute><Booking></Booking></PrivateRoute>
            
        },
      ]
    },
  ]);
  export default router;