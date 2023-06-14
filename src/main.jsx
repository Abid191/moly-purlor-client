import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Headers/Navbar/Navbar.jsx';
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
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/team",
        element: <Team></Team>,
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
    element: <Dashboard></Dashboard>,
    children:[
      
        {
          path: "booking",
          element: <Booking></Booking>,
        },
        {
          path: "list",
          element: <BookList></BookList> ,
        },
        {
          path: "review",
          element: <Review></Review>,
        },
      
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
 
)
