import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaBackward,
  FaBookOpen,
  FaFacebookMessenger,
  FaShoppingCart,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  items-center ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex justify-between">
              <img className="w-2/4" src="/src/assets/assets/logo.png" alt="" />
              <label
                htmlFor="my-drawer-2"
                class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <svg
                  class="-ml-0.5 mr-1.5 h-2 w-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.348 5.651a.5.5 0 0 1 0 .707L10.707 10l3.641 3.643a.5.5 0 0 1-.708.707L10 10.707l-3.643 3.64a.5.5 0 0 1-.707-.707L9.293 10 5.65 6.358a.5.5 0 0 1 .708-.707L10 9.293l3.642-3.642a.5.5 0 0 1 .707 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Close
              </label>
            </div>

            <div className="mt-5">
              <li>
                <Link to="booking">
                  {" "}
                  <span>
                    <FaShoppingCart />{" "}
                  </span>{" "}
                  Booking
                </Link>
              </li>
              <li>
                <Link to="list">
                  {" "}
                  <span>
                    <FaBookOpen />
                  </span>{" "}
                  Booking List
                </Link>
              </li>
              <li>
                <Link to="review">
                  <span>
                    {" "}
                    <FaFacebookMessenger />
                  </span>
                  Review
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>
                    {" "}
                    <FaBackward />
                  </span>
                  Back to home
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
