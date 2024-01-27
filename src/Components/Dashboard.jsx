import React, { useState } from "react";
import { FaBars, FaChessKnight } from "react-icons/fa";
import { FaChess } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BiError } from "react-icons/bi";
import { FaLink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <>
      <div className="flex  overflow-hidden h-screen  bg-gray-800 text-white">
        {isSidebarOpen && (
          <div className="transition-all z-50 w-80 border">
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">Myalgobusiness.com</h1>
              <ul>
                <li
                  className={`mb-5 hover:bg-white hover:text-black hover:rounded-3xl p-3 flex ${
                    selectedMenuItem === "dashboard"
                      ? "bg-white text-black rounded-3xl"
                      : ""
                  }`}
                  onClick={() => handleMenuItemClick("dashboard")}
                >
                  <FaBars className="mr-2 text-2xl" />
                  Dashboard
                </li>
                <li
                className={`mb-5 hover:bg-white hover:text-black hover:rounded-3xl p-3 flex ${
                  selectedMenuItem === "strategies" ? "bg-white text-black rounded-3xl" : ""
                }`}
                onClick={() => handleMenuItemClick("strategies")}
              >
                <FaChessKnight className="mr-2 text-2xl" />
                My Strategies
              </li>
              <li
                className={`mb-5 hover:bg-white hover:text-black hover:rounded-3xl p-3 flex ${
                  selectedMenuItem === "strategyHub" ? "bg-white text-black rounded-3xl" : ""
                }`}
                onClick={() => handleMenuItemClick("strategyHub")}
              >
                <FaChess className="mr-2 text-2xl" />
                Strategy Hub
              </li>
              <li
                className={`mb-5 hover:bg-white hover:text-black hover:rounded-3xl p-3 flex ${
                  selectedMenuItem === "orders" ? "bg-white text-black rounded-3xl" : ""
                }`}
                onClick={() => handleMenuItemClick("orders")}
              >
                <FaShoppingBag className="mr-2 text-2xl" />
                Orders
              </li>
              <li
                className={`mb-5 hover:bg-white hover:text-black hover:rounded-3xl p-3 flex ${
                  selectedMenuItem === "position" ? "bg-white text-black rounded-3xl" : ""
                }`}
                onClick={() => handleMenuItemClick("position")}
              >
                <CgWebsite className="mr-2 text-2xl" />
                Position
              </li>
              <li
                className={`mb-5 hover:bg-white hover:text-black hover:rounded-3xl p-3 flex ${
                  selectedMenuItem === "error" ? "bg-white text-black rounded-3xl" : ""
                }`}
                onClick={() => handleMenuItemClick("error")}
              >
                <BiError className="mr-3 text-2xl" />
                Error
              </li>
              <li
                className={`mb-5 hover:bg-white hover:text-black hover:rounded-3xl p-3 flex ${
                  selectedMenuItem === "broker" ? "bg-white text-black rounded-3xl" : ""
                }`}
                onClick={() => handleMenuItemClick("broker")}
              >
                <FaLink className="mr-3 text-2xl" />
                Broker
              </li>
              <li
                className={`mb-5 hover:bg-white hover:text-black hover:rounded-3xl p-3 flex ${
                  selectedMenuItem === "profile" ? "bg-white text-black rounded-3xl" : ""
                }`}
                onClick={() => handleMenuItemClick("profile")}
              >
                <CgProfile className="mr-3 text-2xl" />
                Profile
              </li>
              </ul>
            </div>
          </div>
        )}
        <div className="flex flex-col flex-1">
          <div className="flex bg-gray-800 z-0 border text-white justify-between">
            <div className={`flex-1 transition-all ${isSidebarOpen ? "ml-2" : "ml-10"}`}>
              <button className="flex text-xl py-1 rounded-lg font-bold mb-2" onClick={toggleSidebar}>
                <FaBars className="text-xl mr-2 mt-1" />
                Dashboard
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button className="flex text-xl p-3 py-1 rounded-lg font-bold mb-2">
                <CgProfile className="text-2xl mr-3" />
                Anuj Mishra
              </button>
              <button className="ml-10 text-2xl">Logout</button>
            </div>
          </div>
          <div className={`flex-1 transition-all ${isSidebarOpen ? "ml-2" : "ml-10"}`}>
            {selectedMenuItem === "dashboard" && (
              <div className="flex-1 flex-col transition-all">
                <h1>Main Content for Dashboard</h1>
              </div>
            )}
            {selectedMenuItem === "strategies" && (
          <div className="flex-1 transition-all">
            {/* Content for My Strategies */}
            <p>My Strategies Content Goes Here</p>
          </div>
        )}
        {selectedMenuItem === "strategyHub" && (
          <div className="flex-1 transition-all">
            {/* Content for Strategy Hub */}
            <p>Strategy Hub Content Goes Here</p>
          </div>
        )}
        {selectedMenuItem === "orders" && (
          <div className="flex-1 transition-all">
            {/* Content for Orders */}
            <p>Orders Content Goes Here</p>
          </div>
        )}
        {selectedMenuItem === "position" && (
          <div className="flex-1 transition-all">
            {/* Content for Position */}
            <p>Position Content Goes Here</p>
          </div>
        )}
        {selectedMenuItem === "error" && (
          <div className="flex-1 transition-all">
            {/* Content for Error */}
            <p>Error Content Goes Here</p>
          </div>
        )}
        {selectedMenuItem === "broker" && (
          <div className="flex-1 transition-all">
            {/* Content for Broker */}
            <p>Broker Content Goes Here</p>
          </div>
        )}
        {selectedMenuItem === "profile" && (
          <div className="flex-1 transition-all">
            {/* Content for Profile */}
            <p>Profile Content Goes Here</p>
          </div>
        )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
