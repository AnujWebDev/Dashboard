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
      <div className="flex overflow-hidden h-screen bg-gray-800 text-white">
        <div
          className={`transition-all ${
            isSidebarOpen ? "w-80" : "w-24"
          } overflow-y-scroll overflow-x-scroll overflow-hidden border`}
        >
          <div className="p-4">
            <h1 className="text-md ml-5  mb-10">Myalgobusiness.com</h1>
            <ul>
              <li
                className={`mb-4 w-full hover:bg-white hover:text-black hover:rounded-3xl p-1 flex ${
                  selectedMenuItem === "dashboard"
                    ? "bg-white text-black rounded-3xl"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("dashboard")}
              >
                <FaBars className=" text-2xl" />
                {isSidebarOpen && <span>Dashboard</span>}
              </li>

              <li
                className={`mb-4 w-full hover:bg-white hover:text-black hover:rounded-3xl p-1 flex ${
                  selectedMenuItem === "myStrategies"
                    ? "bg-white text-black rounded-3xl"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("myStrategies")}
              >
                <LiaChessKnightSolid className=" text-2xl" />
                {isSidebarOpen && <span>My Strategies</span>}
              </li>
              <li
                className={`mb-4 w-full hover:bg-white hover:text-black hover:rounded-3xl p-1 flex ${
                  selectedMenuItem === "Strategieshub"
                    ? "bg-white text-black rounded-3xl"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("Strategieshub")}
              >
                <LiaChessSolid className=" text-2xl" />
                {isSidebarOpen && <span>Strategy Hub</span>}
              </li>

              <li
                className={`mb-4 w-full hover:bg-white hover:text-black hover:rounded-3xl p-1 flex ${
                  selectedMenuItem === "order"
                    ? "bg-white text-black rounded-3xl"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("order")}
              >
                <LiaShoppingBagSolid className=" text-2xl" />
                {isSidebarOpen && <span>Order</span>}
              </li>
              <li
                className={`mb-4 w-full hover:bg-white hover:text-black hover:rounded-3xl p-1 flex ${
                  selectedMenuItem === "position"
                    ? "bg-white text-black rounded-3xl"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("position")}
              >
                <LiaReceiptSolid className=" text-2xl" />
                {isSidebarOpen && <span>Position</span>}
              </li>
              <li
                className={`mb-4 w-full hover:bg-white hover:text-black hover:rounded-3xl p-1 flex ${
                  selectedMenuItem === "error"
                    ? "bg-white text-black rounded-3xl"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("error")}
              >
                <LiaExclamationTriangleSolid className=" text-2xl" />
                {isSidebarOpen && <span>Errors</span>}
              </li>
              <li
                className={`mb-4 w-full hover:bg-white hover:text-black hover:rounded-3xl p-1 flex ${
                  selectedMenuItem === "broker"
                    ? "bg-white text-black rounded-3xl"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("broker")}
              >
                <LiaLinkSolid className=" text-2xl" />
                {isSidebarOpen && <span>Broker</span>}
              </li>
              <li
                className={`mb-4 w-full hover:bg-white hover:text-black hover:rounded-3xl p-1 flex ${
                  selectedMenuItem === "profile"
                    ? "bg-white text-black rounded-3xl"
                    : ""
                }`}
                onClick={() => handleMenuItemClick("profile")}
              >
                <LiaUserTieSolid className=" text-2xl" />
                {isSidebarOpen && <span>Profile</span>}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex bg-gray-800 z-0 border rounded-xl text-white justify-between">
            <div
              className={`flex-1 transition-all ${
                isSidebarOpen ? "ml-2" : "ml-10"
              }`}
            >
              <button
                className="flex text-xl py-1 rounded-lg font-bold mb-2"
                onClick={toggleSidebar}
              >
                <FaBars className="text-xl mr-2 mt-1" />
                Dashboard
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button className="flex text-xl p-3 py-1 rounded-lg font-bold mb-2">
                <LiaUserTieSolid className="text-2xl mr-3" />
                Anuj Mishra
              </button>
              <button className="ml-10 text-2xl">Logout</button>
            </div>
          </div>
          <div
            className={`flex-1 transition-all ${
              isSidebarOpen ? "ml-2" : "ml-10"
            }`}
          >
            {selectedMenuItem === "dashboard" && (
              <div className="flex-1 flex-col transition-all">
                <div className="flex justify-between p-5">
                  <div className="bg-white flex p-5 mt-10 text-black">
                    <div className="">
                      <p className="p-2 font-bold mt-2">0</p>
                      <p className="text-gray-400">Today's Profit</p>
                    </div>
                    <div className="flex justify-center ml-36 mt-5">
                      <LiaCoinsSolid className="text-4xl" />
                    </div>
                  </div>
                  <div className="bg-white flex p-5 mt-10 text-black">
                    <div className="">
                      <p className=" font-bold mt-2">
                        <span className="font-bold">Time:</span>
                        2024-01-27 13:15:50
                      </p>
                      <p className="font-bold mt-2">
                        <span className="font-bold">Time:</span>
                        windows
                      </p>
                      <p className="text-gray-400">Last Login Info</p>
                    </div>
                    <div className="flex justify-center ml-20 mt-5">
                      <LiaUnlockAltSolid className="text-4xl" />
                    </div>
                  </div>
                  <div className="bg-white flex p-5 mt-10 text-black">
                    <div className="">
                      <p className="p-2 font-bold mt-2">PREMIUM</p>
                      <p className="text-gray-400">Your Active Plan</p>
                    </div>
                    <div className="flex justify-center ml-36 mt-5">
                      <BsCupHot className="text-4xl" />
                    </div>
                  </div>
                  <div className="bg-[#5957ea] text-white flex p-5 mt-10 ">
                    <div className="">
                      <p className="p-2 font-bold mt-2">Support</p>
                    </div>
                    <div className="flex justify-center ml-32 mt-5">
                      <MdMailOutline className="text-6xl" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                <div className="bg-white rounded-lg overflow-y-scroll h-[1000px]">
                  <h1 className="text-black border shadow-lg p-5 text-xl font-bold">Recent Trades</h1>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
