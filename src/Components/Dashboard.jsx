import React, { useState } from "react";
import { FaBars, FaChessKnight } from "react-icons/fa";
import { LiaChessKnightSolid } from "react-icons/lia";
import { LiaChessSolid } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaReceiptSolid } from "react-icons/lia";
import { LiaExclamationTriangleSolid } from "react-icons/lia";
import { LiaLinkSolid } from "react-icons/lia";
import { LiaUserTieSolid } from "react-icons/lia";
import { LiaCoinsSolid } from "react-icons/lia";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { MdMailOutline } from "react-icons/md";
import { BsCupHot } from "react-icons/bs";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <>
      <div className="flex h-auto bg-[#15202b] text-white">
        <div
          className={`transition-all ${
            isSidebarOpen ? "w-80" : "w-24"
          } overflow-y-scroll overflow-x-scroll overflow-hidden border`}
        >
          <div className="p-4">
            <h1
              style={{ fontFamily: "PT Sans, sans-serif" }}
              className="text-md ml-5  mb-10"
            >
              Myalgobusiness.com
            </h1>
            <ul>
              <li
                className={`mb-4 w-full hover:cursor-pointer p-1 flex ${
                  selectedMenuItem === "dashboard"
                    ? " hover:cursor-pointer"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("dashboard")}
              >
                <FaBars className="mr-4 text-2xl" />
                {isSidebarOpen && (
                  <span style={{ fontFamily: "PT Sans, sans-serif" }}>
                    Dashboard
                  </span>
                )}
              </li>
              <li
                className={`mb-4 w-full hover:cursor-pointer  p-1 flex ${
                  selectedMenuItem === "myStrategies"
                    ? "hover:cursor-pointer"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("myStrategies")}
              >
                <LiaChessKnightSolid className="mr-4 text-2xl" />
                {isSidebarOpen && (
                  <span style={{ fontFamily: "PT Sans, sans-serif" }}>
                    My Strategies
                  </span>
                )}
              </li>
              <li
                className={`mb-4 w-full hover:cursor-pointer  p-1 flex ${
                  selectedMenuItem === "Strategieshub"
                    ? "hover:cursor-pointer"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("Strategieshub")}
              >
                <LiaChessSolid className=" mr-4 text-2xl" />
                {isSidebarOpen && (
                  <span style={{ fontFamily: "PT Sans, sans-serif" }}>
                    Strategy Hub
                  </span>
                )}
              </li>

              <li
                className={`mb-4 w-full hover:cursor-pointer p-1 flex ${
                  selectedMenuItem === "order" ? "hover:cursor-pointer" : ""
                }`}
                onClick={() => handleMenuItemClick("order")}
              >
                <LiaShoppingBagSolid className="mr-4 text-2xl" />
                {isSidebarOpen && (
                  <span style={{ fontFamily: "PT Sans, sans-serif" }}>
                    Order
                  </span>
                )}
              </li>
              <li
                className={`mb-4 w-full hover:cursor-pointer p-1 flex ${
                  selectedMenuItem === "position" ? "hover:cursor-pointer" : ""
                }`}
                onClick={() => handleMenuItemClick("position")}
              >
                <LiaReceiptSolid className="mr-4 text-2xl" />
                {isSidebarOpen && (
                  <span style={{ fontFamily: "PT Sans, sans-serif" }}>
                    Position
                  </span>
                )}
              </li>
              <li
                className={`mb-4 w-full hover:cursor-pointer p-1 relative flex ${
                  selectedMenuItem === "error" ? "hover:cursor-pointer" : ""
                }`}
                onClick={() => handleMenuItemClick("error")}
              >
                <LiaExclamationTriangleSolid className="mr-4 text-2xl" />
                {isSidebarOpen && (
                  <span className="z-10" style={{ fontFamily: "PT Sans, sans-serif" }}>
                    Errors
                  </span>
                )}
                <div className="absolute z-0 bottom-4 right-44 -mt-1 -mr-1 bg-red-600 p-3 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                  {numberOfErrors}
                </div>
              </li>
              <li
                className={`mb-4 w-full hover:cursor-pointer p-1 flex ${
                  selectedMenuItem === "broker" ? "hover:cursor-pointer" : ""
                }`}
                onClick={() => handleMenuItemClick("broker")}
              >
                <LiaLinkSolid className=" mr-4 text-2xl" />
                {isSidebarOpen && (
                  <span style={{ fontFamily: "PT Sans, sans-serif" }}>
                    Broker
                  </span>
                )}
              </li>
              <li
                className={`mb-4 w-full hover:cursor-pointer p-1 flex ${
                  selectedMenuItem === "profile" ? "hover:cursor-pointer" : ""
                }`}
                onClick={() => handleMenuItemClick("profile")}
              >
                <LiaUserTieSolid className="mr-4 text-2xl" />
                {isSidebarOpen && (
                  <span style={{ fontFamily: "PT Sans, sans-serif" }}>
                    Profile
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col  overflow-y-hidden flex-1">
          <div className="flex fixed w-[95%] bg-[#15202b] z-50 border rounded-xl text-white justify-between">
            <div
              className={`flex-1 transition-all ${
                isSidebarOpen ? "ml-2" : "ml-10"
              }`}
            >
              <button
                style={{ fontFamily: "PT Sans, sans-serif" }}
                className="flex text-xl py-1 rounded-lg font-bold mb-2"
                onClick={toggleSidebar}
              >
                <FaBars className="text-xl mr-2 mt-1" />
                Dashboard
              </button>
            </div>
            <div
              className={`flex flex-col items-center ${
                isSidebarOpen ? "mr-52" : ""
              }`}
            >
              <button
                style={{ fontFamily: "PT Sans, sans-serif" }}
                className="hidden text-xl  mr-16 p-3 py-1 rounded-lg font-bold mb-2"
              >
                <LiaUserTieSolid className="text-2xl mr-3" />
                Anuj Mis
              </button>
              <Link to={'/login'} className="ml-10 mr-20 lg:mr-10 text-xl">Login</Link>
            </div>
          </div>
          <div
            className={`flex-1 transition-all z-0 ${
              isSidebarOpen ? "ml-0" : "ml-0"
            }`}
          >
            <div className="flex-1 mt-16 flex-col overflow-y-scroll transition-all">
              <div className="flex flex-col sm:flex-row justify-between gap-2 p-5">
                <div className="bg-white w-full flex p-2 mt-10 text-black">
                  <div className="">
                    <p className="p-2 font-bold">0</p>
                    <p className="text-gray-400">Today's Profit</p>
                  </div>
                  <div className="flex justify-center mt-5 sm:ml-36">
                    <LiaCoinsSolid className="text-4xl ml-28 lg:ml-0" />
                  </div>
                </div>
                <div className="bg-white  w-full flex pl-5 mt-10 text-black">
                  <div className="">
                    <p className="font-bold text-sm mt-2">
                      <span className="font-bold">Time:</span>
                      2024-01-27 13:15:50
                    </p>
                    <p className="font-bold text-sm mt-2">
                      <span className="font-bold">Time:</span>
                      windows
                    </p>
                    <p className="text-gray-400 text-sm mb-5 lg:mb-0">Last Login Info</p>
                  </div>
                  <div className="flex justify-center mt-5 ml-6">
                    <LiaUnlockAltSolid className="text-4xl lg:ml-0" />
                  </div>
                </div>
                <div className="bg-white w-full flex p-2 mt-10 text-black">
                  <div className="">
                    <p className="font-bold text-sm mt-2">PREMIUM</p>
                    <p className="text-gray-400 text-sm mb-8 lg:mb-0">Your Active Plan</p>
                  </div>
                  <div className="flex justify-center mt-2 ml-28 lg:ml-40 ">
                    <BsCupHot className="text-4xl " />
                  </div>
                </div>
                <div className="bg-[#5957ea] w-full text-white flex mt-10 ">
                  <div className="">
                    <p className="p-2 mt-2 mb-10 lg:mb-0">Support</p>
                  </div>
                  <div className="flex justify-center ml-36 lg:ml-52">
                    <MdMailOutline className="text-4xl mt-4 " />
                  </div>
                </div>
              </div>
              <div className="p-5 w-full h-screen ">
                <div className="bg-white rounded-lg w-full overflow-y-scroll overflow-x-scroll h-[600px]">
                  <h1 className="text-black w-[1000px] lg:w-full border shadow-lg p-5 text-xl font-bold">
                    Recent Trades
                  </h1>
                  <div className="p-3">
                  <div className="flex p-2 flex-row gap-5 border-y w-[1000px] lg:w-full hover:bg-blue-200 justify-between mt-5 text-black">
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold">Strategy</p>
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold">Script</p>
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold">Qty</p>
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold">Side</p>
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold">Entry Price</p>
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold">Exit Price</p>
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold">Pnl</p>
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold">Status</p>
                    <p style={{ fontFamily: "PT Sans, sans-serif" }} className="font-bold text-white">Edit</p>
                  </div>
                  <div className="h-[600px]">

                  </div>
                  </div>
                </div>
              </div>
            </div>

            {selectedMenuItem === "dashboard" && <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
