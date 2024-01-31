import React, { useContext, useState } from "react";
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
import { AppContext } from "../Context/AppContext";
const Dashboard = () => {
  const entryData = useContext(AppContext);
  const { user } = useContext(AppContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  const calculateTodayProfit = (r) => {
    if (!entryData.entry || entryData.entry.length === 0) {
      return 0;
    }
    const totalPnl = entryData.entry.reduce((acc, item) => {
      const pnlValue = parseFloat(item.Pnl);
      return !isNaN(pnlValue) ? acc + pnlValue : acc;
    }, 0);
    const roundedTotalPnl = Number(Math.abs(totalPnl).toFixed(2));
    return totalPnl >= 0 ? roundedTotalPnl : -roundedTotalPnl;
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
                  <span
                    style={{ fontFamily: "Poppins", sansSerif: "sans-serif" }}
                  >
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
              {entryData.isAuthenticated && (
                <>
                  <Link
                    style={{ fontFamily: "PT Sans, sans-serif" }}
                    className="flex text-sm mr-10 p-3 py-1 rounded-lg font-bold mb-2"
                  >
                    <LiaUserTieSolid className="text-2xl mr-3" />
                    {user?.name}
                  </Link>
                </>
              )}

              {entryData.isAuthenticated && (
                <Link
                  to={"/"}
                  onClick={entryData.Logout}
                  className="ml-10 mr-20 lg:mr-10 text-sm"
                >
                  Logout
                </Link>
              )}
              {!entryData.isAuthenticated && (
                <Link to={"/"} className="ml-10 mr-20 lg:mr-20 p-2 text-sm">
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
                  <div className=" m-6 w-1/2 my-10">
                    <h3
                      style={{
                        color: todayProfitOrLoss < 0 ? "#DC2626" : "#82d616",
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "18.72px",
                        fontWeight: "bold",
                      }}
                    >
                      {todayProfitOrLoss < 0 ? "-" : "+"}
                      {Math.abs(todayProfitOrLoss)}
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
                    <LiaCoinsSolid className=" text-4xl  text-black" />
                  </div>
                </div>
                <div className="bg-white flex  w-full h-[128px]">
                  <div className=" m-6 w-1/2 flex flex-col justify-center my-10">
                    <h3
                      className="text-black font-bold"
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Time:
                      <span
                        className="font-bold"
                        style={{
                          fontFamily: "Poppins",
                          sansSerif: "sans-serif",
                          fontSize: "10px",
                        }}
                      >
                        2024-01-31 17:43:36
                      </span>
                    </h3>
                    <p
                      className="text-black font-bold"
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Device:
                      <span
                        className="font-bold"
                        style={{
                          fontFamily: "Poppins",
                          sansSerif: "sans-serif",
                          fontSize: "10px",
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
                    <LiaUnlockAltSolid className="text-4xl text-black" />
                  </div>
                </div>
                <div className="bg-white flex  w-full h-[128px]">
                  <div className=" m-6 w-1/2 my-5">
                    <h3
                      style={{
                        color: "black",
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "18.72px",
                      }}
                    >
                      PREMIUM
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
                    <BsCupHot className="text-4xl text-black" />
                  </div>
                </div>
                <div className="bg-[#5957ea] flex  w-full h-[128px]">
                  <div className=" m-6 w-1/2 my-5">
                    <h3
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontSize: "18.72px",
                      }}
                    >
                      Support
                    </h3>
                  </div>
                  <div className="w-1/2 flex justify-end my-10 mx-5">
                    <MdMailOutline className="text-4xl text-white" />
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
                        <thead className="w-full">
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
                            <th
                              style={{
                                fontFamily: "Poppins",
                                sansSerif: "sans-serif",
                              }}
                              className="p-2 hidden text-black text-left font-bold"
                            >
                              Side
                            </th>
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
                              <td
                                style={{
                                  fontFamily: "Poppins",
                                  sansSerif: "sans-serif",
                                  fontSize: "13px",
                                }}
                                className="p-2 hidden text-black"
                              >
                                {e.Side}
                              </td>
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
