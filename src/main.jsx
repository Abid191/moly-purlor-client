import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Headers/Layout/Layout.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Team from './Pages/Team/Team.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Shared/Login/Login.jsx';
import SignUp from './Pages/Shared/SignUp/SignUp.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Booking from './Pages/Dashboard/Booking/Booking.jsx';
import BookList from './Pages/Dashboard/BookList/BookList.jsx';
import Review from './Pages/Dashboard/Review/Review.jsx';
import AdminDash from './Pages/AdminDashBoard/AdminDash.jsx';
import OrderList from './Pages/AdminDashBoard/OrderList/OrderList.jsx';
import AddService from './Pages/AdminDashBoard/AddService/AddService.jsx';
import MakeAdmin from './Pages/AdminDashBoard/MakeAdmin/MakeAdmin.jsx';
import ManageService from './Pages/AdminDashBoard/ManageService/ManageService.jsx';
import AuthProvider from './Pages/Shared/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/portfolio",
        element: <PrivateRoute><Portfolio></Portfolio></PrivateRoute>,
      },
      {
        path: "/team",
        element: <PrivateRoute><Team></Team></PrivateRoute>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      {
        path: "booking",
        element: <Booking></Booking>,
      },
      {
        path: "list",
        element: <BookList></BookList>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
    ]
  },

  {
    path: "admindash",
    element: <PrivateRoute><AdminDash></AdminDash></PrivateRoute>,
    children: [
      {
        path: "order",
        element: <OrderList></OrderList>,
      },
      {
        path: "service",
        element: <AddService></AddService>,
      },
      {
        path: "makeadmin",
        element: <MakeAdmin></MakeAdmin>,
      },
      {
        path: "manage",
        element: <ManageService></ManageService>,
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,

)
