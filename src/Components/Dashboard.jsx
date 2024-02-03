import React, { useContext, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { LiaCoffeeSolid } from "react-icons/lia";
import { LiaEnvelopeSolid } from "react-icons/lia";
import Profile from "../assets/Profile.png"

const Dashboard = () => {
  const entryData = useContext(AppContext);
  const { user } = useContext(AppContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [isLiveTrading, setLiveTrading] = useState(false);
  const [isPaperTrading, setPaperTrading] = useState(false);

 
  
  const handleToggle = () => {
    setLiveTrading(!isLiveTrading);
    setPaperTrading(!isPaperTrading);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  const calculateTodayProfit = () => {
    if (!entryData.entry || entryData.entry.length === 0) {
      return 0;
    }

    const totalPnl = entryData.entry.reduce((acc, item) => {
      const pnlValue = parseFloat(item.Pnl);
      return !isNaN(pnlValue) ? acc + pnlValue : acc;
    }, 0);

    const roundedTotalPnl = Number(totalPnl.toFixed(2));

    return roundedTotalPnl;
    
  };
  

  const todayProfitOrLoss = calculateTodayProfit();

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
                  <span
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
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
                  <span
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
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
                  <span
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
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
                  <span
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
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
                  <span
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
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
                  <span
                    className="z-10"
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
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
                  <span
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
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
                  <Link
                    to={"/userdetails"}
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
                    Profile
                  </Link>
                )}
              </li>
              <li>
                <button
                  className={`relative inline-block overflow-hidden w-full h-8 p-1 rounded-full ${
                    isLiveTrading ? "bg-[#00ffdc]" : "bg-[#ea0606ba]"
                  }`}
                  onClick={handleToggle}
                >
                  <div
                    className={`absolute left-[-5px] top-[0px] bg-white rounded-t-full w-36 h-full rounded-md transform overflow-hidden ${
                      isLiveTrading ? "translate-x-full" : ""
                    } transition-transform duration-300 ease-in-out`}
                    style={{
                      backgroundColor: isLiveTrading
                        ? " #268f81 "
                        : "#ea0606ba",
                    }}
                  >
                    <span
                      className={`absolute inset-0 flex items-center justify-center text-white`}
                    >
                      {isLiveTrading
                        ? "Live trading is on"
                        : "Paper trading is on"}
                    </span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col  overflow-y-hidden flex-1">
          <div className="flex fixed w-[95%] h-20 bg-[#15202b] z-50 border rounded-xl text-white justify-between">
            <div
              className={`flex-1 transition-all ${
                isSidebarOpen ? "ml-2" : "ml-5"
              }`}
            >
              <button
                style={{ fontFamily: "PT Sans, sans-serif" }}
                className="flex text-2xl mt-5  rounded-lg font-bold mb-2"
                onClick={toggleSidebar}
              >
                <FaBars className="text-2xl mr-2  mt-1" />
                Dashboard
              </button>
            </div>
            <div
              className={`flex mt-3 flex-col r ${isSidebarOpen ? "mr-52" : ""}`}
            >
              {entryData.isAuthenticated && (
                <>
                  <Link
                    to={"/userdetails"}
                    style={{ fontFamily: "PT Sans, sans-serif" }}
                    className="flex text-md mr-10  py-1 rounded-lg font-bold mb-2"
                  >
                    <img src={Profile} className="w-[20px] h-[25px] mr-1" alt="profile icon"></img>
                    {user?.name}
                  </Link>
                </>
              )}

              {entryData.isAuthenticated && (
                <Link
                  to={"/"}
                  onClick={entryData.Logout}
                  className="ml-10 mr-20 relative top-[-10px] right-5 lg:mr-10 text-md"
                >
                  Logout
                </Link>
              )}
              {!entryData.isAuthenticated && (
                <Link to={"/"} className="ml-10 mr-20 lg:mr-20 p-2 text-xl">
                  login
                </Link>
              )}
            </div>
          </div>
          <div
            className={`flex-1 transition-all z-0 ${
              isSidebarOpen ? "ml-0" : "ml-0"
            }`}
          >
            <div className="flex-1  flex-col mt-24 overflow-y-scroll transition-all">
              <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
                <div className="bg-white flex w-full h-[128px]">
                  <div className=" m-6 w-1/2 my-9">
                    <h3
                      style={{
                        color: todayProfitOrLoss < 0 ? "#DC2626" : "#82d616",
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "18.72px",
                        fontWeight: "bold",
                      }}
                    >
                      {todayProfitOrLoss < 0 ? "" : "+"}
                      {todayProfitOrLoss.toFixed(1)}
                    </h3>
                    <span
                      className="text-[#8390A2]"
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Today's Profit
                    </span>
                  </div>
                  <div className="w-1/2 flex justify-end my-10 mx-5">
                    <LiaCoinsSolid className=" text-5xl  text-black" />
                  </div>
                </div>
                <div className="bg-white flex  w-full h-[128px]">
                  <div className=" m-6 w-1/2 flex flex-col justify-center my-8">
                    <h3
                      className="text-black font-semibold"
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Time:
                      <span
                        className=""
                        style={{
                          fontFamily: "Poppins",
                          sansSerif: "sans-serif",
                          fontSize: "11px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        2024-01-31 17:43:36
                      </span>
                    </h3>
                    <p
                      className="text-black font-semibold"
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Device:
                      <span
                        className="font-semibold"
                        style={{
                          fontFamily: "Poppins",
                          sansSerif: "sans-serif",
                          fontSize: "12px",
                        }}
                      >
                        Windows
                      </span>
                    </p>
                    <span
                      className="text-[#8390A2]"
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Last Login Info
                    </span>
                  </div>
                  <div className="w-1/2 flex justify-end my-10 mx-5">
                    <LiaUnlockAltSolid className="text-5xl text-black" />
                  </div>
                </div>
                <div className="bg-white flex  w-full h-[128px]">
                  <div className=" m-6 w-3/4 my-8">
                    <h3
                      style={{
                        color: "black",
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "14.72px",
                      }}
                    >
                      {user?.packages}
                    </h3>
                    <span
                      className="text-[#8390A2]"
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Your Active Plan
                    </span>
                  </div>
                  <div className="w-1/2 flex justify-end my-10 mx-5">
                    <LiaCoffeeSolid className="text-5xl text-black" />
                  </div>
                </div>
                <div className="bg-[#5957ea] flex  w-full h-[128px]">
                  <div className=" m-6 w-1/2 my-8">
                    <h3
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "14.72px",
                      }}
                    >
                      Support
                    </h3>
                  </div>
                  <div className="w-1/2 flex justify-end my-10 mx-5">
                    <LiaEnvelopeSolid className="text-5xl text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5 w-full h-screen ">
                <div className="bg-white rounded-lg w-full overflow-y-scroll overflow-x-scroll h-[450px]">
                  <p
                    style={{
                      fontFamily: "Poppins",
                      sansSerif: "sans-serif",
                      fontWeight: "bolder",
                    }}
                    className="text-black shadow-xl p-3 w-full  text-xl "
                  >
                    Recent Trades
                  </p>
                  <div className="p-3">
                    {entryData &&
                    entryData.entry &&
                    entryData.entry.length > 0 ? (
                      <table className=" w-full">
                        <thead className="w-full border-y hover:bg-blue-200">
                          <tr className="hover:bg-blue-200">
                            <th
                              style={{
                                fontFamily: "Poppins",
                                sansSerif: "sans-serif",
                              }}
                              className="p-2 text-black text-left font-bold"
                            >
                              Strategy
                            </th>

                            <th
                              style={{
                                fontFamily: "Poppins",
                                sansSerif: "sans-serif",
                              }}
                              className="p-2 text-black text-left font-bold"
                            >
                              Script
                            </th>
                            <th
                              style={{
                                fontFamily: "Poppins",
                                sansSerif: "sans-serif",
                              }}
                              className="p-2 text-black text-left font-bold"
                            >
                              Qty
                            </th>
                            {isLiveTrading && (
                              <th
                                style={{
                                  fontFamily: "Poppins",
                                  sansSerif: "sans-serif",
                                }}
                                className="p-2 text-black text-left font-bold"
                              >
                                Side
                              </th>
                            )}
                            <th
                              style={{
                                fontFamily: "Poppins",
                                sansSerif: "sans-serif",
                              }}
                              className="p-2 text-black text-left font-bold"
                            >
                              Entry Price
                            </th>
                            <th
                              style={{
                                fontFamily: "Poppins",
                                sansSerif: "sans-serif",
                              }}
                              className="p-2 text-black text-left font-bold"
                            >
                              Exit Price
                            </th>
                            <th
                              style={{
                                fontFamily: "Poppins",
                                sansSerif: "sans-serif",
                              }}
                              className="p-2 text-black text-left font-bold"
                            >
                              Pnl
                            </th>
                            <th
                              style={{
                                fontFamily: "Poppins",
                                sansSerif: "sans-serif",
                              }}
                              className="p-2 text-black text-left font-bold"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {entryData.entry.map((e) => (
                            <tr key={e._id} className="hover:bg-blue-200">
                              <td
                                style={{
                                  fontFamily: "Poppins",
                                  sansSerif: "sans-serif",
                                  fontSize: "13px",
                                }}
                                className="p-2 text-black"
                              >
                                {e.Stratergy}
                              </td>
                              <td
                                style={{
                                  fontFamily: "Poppins",
                                  sansSerif: "sans-serif",
                                  fontSize: "13px",
                                }}
                                className="p-2 text-black"
                              >
                                {e.Script}
                              </td>
                              <td
                                style={{
                                  fontFamily: "Poppins",
                                  sansSerif: "sans-serif",
                                  fontSize: "13px",
                                }}
                                className="p-2 text-black"
                              >
                                {e.Qty}
                              </td>
                              {isLiveTrading && (
                                <td
                                  style={{
                                    fontFamily: "Poppins",
                                    sansSerif: "sans-serif",
                                    fontSize: "13px",
                                  }}
                                  className="p-2 text-black"
                                >
                                  {e.Side}
                                </td>
                              )}

                              <td
                                style={{
                                  fontFamily: "Poppins",
                                  sansSerif: "sans-serif",
                                  fontSize: "13px",
                                }}
                                className="p-2 text-black"
                              >
                                {e.EntryPrice}
                              </td>
                              <td
                                style={{
                                  fontFamily: "Poppins",
                                  sansSerif: "sans-serif",
                                  fontSize: "13px",
                                }}
                                className="p-2 text-black"
                              >
                                {e.ExitPrice}
                              </td>
                              <td>
                                <div
                                  className={`text-center ${
                                    Number(e.Pnl) < 0
                                      ? "text-white bg-[#DC2626] h-[25px] rounded-full"
                                      : "text-white bg-[#22C55E] h-[25px] rounded-full"
                                  }`}
                                >
                                  {Number(e.Pnl).toFixed(2)}
                                </div>
                              </td>
                              <td
                                style={{
                                  fontFamily: "Poppins",
                                  sansSerif: "sans-serif",
                                  fontSize: "13px",
                                }}
                                className="p-2 text-black"
                              >
                                {e.Status}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div
                        style={{
                          fontFamily: "Poppins",
                          sansSerif: "sans-serif",
                        }}
                        className="w-full text-center text-2xl text-black  p-4"
                      >
                        No entries today
                      </div>
                    )}
                    <div className="h-[600px]"></div>
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
