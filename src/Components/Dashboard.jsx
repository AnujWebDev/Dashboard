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
  const calculateTodayProfit = (r, decimalPlaces = 2) => {
    const totalPnl = entryData.entry.reduce((acc, item) => {
        r;
        const pnlValue = parseFloat(item.Pnl);
        return !isNaN(pnlValue) ? acc + pnlValue : acc;
    }, 0);

    const roundedTotalPnl = Number(Math.abs(totalPnl).toFixed(decimalPlaces));
    
    // Check the sign of totalPnl and adjust accordingly
    return totalPnl >= 0 ? roundedTotalPnl : -roundedTotalPnl;
};

  const todayProfitOrLoss = calculateTodayProfit();
  const isProfit = todayProfitOrLoss >= 0;
  const data = [
    {
      title: "Today's Profit",
      icon: (
        <LiaCoinsSolid className="text-4xl flex lg:ml-40 ml-20 text-black" />
      ),
      bgColor: "bg-white",
    },
    {
      title: "Last Login Info",
      subtitle: (
        <>
          <span className="font-bold">Time:</span> 2024-01-27 13:15:50
          <br />
          <span className="font-bold">Time:</span> windows
        </>
      ),
      icon: <LiaUnlockAltSolid className="text-4xl lg:ml-20 ml-0 text-black" />,
      bgColor: "bg-white",
    },
    {
      title: "Your Active Plan",
      subtitle: "PREMIUM",
      icon: <BsCupHot className="text-4xl lg:ml-40 ml-24" />,
      bgColor: "bg-white text-black",
    },
    {
      title: "Support",
      icon: (
        <MdMailOutline className="text-4xl lg:ml-44 ml-[110px] text-white" />
      ),
      bgColor: "bg-[#5957ea]",
      style: {
        color: "white",
      },
    },
  ];

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
                  <span
                    className="z-10"
                    style={{ fontFamily: "PT Sans, sans-serif" }}
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
                <Link to={"/"} onClick={entryData.Logout} className="ml-10 mr-20 lg:mr-10 text-sm">
                  Logout
                </Link>
              )}
              {!entryData.isAuthenticated && (
                <Link to={"/"}  className="ml-10 mr-20 lg:mr-20 p-2 text-sm">
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
            <div className="flex-1 mt-16 flex-col overflow-y-scroll transition-all">
              <div className="flex flex-col sm:flex-row justify-between gap-2 p-5">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full flex ${item.bgColor} p-5 sm:w-full md:w-full lg:w-full`}
                    style={{ width: "309px", height: "128px" }}
                  >
                    <div
                      className={
                        index === 3 && item.style ? "text-white" : "text-black"
                      }
                    >
                      <p
                        className={`font-bold text-sm ${
                          index !== 1 ? "mt-2" : ""
                        }`}
                      >
                        {index === 1 ? (
                          <>
                            <span
                              className="font-bold "
                              style={{ fontSize: "10px" }}
                            >
                              Time:
                            </span>{" "}
                            <span
                              className="block sm:inline"
                              style={{ fontSize: "10px" }}
                            >
                              2024-01-27 13:15:50
                            </span>
                            <br className="hidden lg:block" />
                            <span
                              className="font-bold text-sm"
                              style={{ fontSize: "10px" }}
                            >
                              Device:
                            </span>
                            <span style={{ fontSize: "10px" }}> windows</span>
                          </>
                        ) : (
                          <>
                            {item.subtitle}
                            {index === 0 && (
                              <span
                                style={{ color: isProfit ? "green" : "red" }}
                                className="text-2xl"
                              >
                                {Math.abs(todayProfitOrLoss)}
                              </span>
                            )}
                          </>
                        )}
                      </p>
                      {index !== 2 && (
                        <p className="text-[10px] font-bold mb-5 lg:mb-0">
                          {item.title}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-end items-center">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 w-full h-screen ">
                <div className="bg-white rounded-lg w-full overflow-y-scroll overflow-x-scroll h-[600px]">
                  <h1 className="text-black  lg:w-full border shadow-lg p-5 text-xl font-bold">
                    Recent Trades
                  </h1>
                  <div className="p-3">
                  <table className=" w-full">
                      <thead>
                        <tr className="hover:bg-blue-200">
                          <th className="p-2 text-black font-bold">Strategy</th>
                          <th className="p-2 text-black font-bold">Script</th>
                          <th className="p-2 text-black font-bold">Qty</th>
                          <th className="p-2 text-black font-bold">Side</th>
                          <th className="p-2 text-black font-bold">
                            Entry Price
                          </th>
                          <th className="p-2 text-black font-bold">
                            Exit Price
                          </th>
                          <th className="p-2 text-black font-bold">Pnl</th>
                          <th className="p-2 text-black font-bold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entryData.entry.map((e) => (
                          <tr key={e._id} className="border hover:bg-blue-300">
                            <td className="p-2 text-black text-center">
                              {e.Stratergy}
                            </td>
                            <td className="p-2 text-black text-center">
                              {e.Script}
                            </td>
                            <td className="p-2 text-black text-center">
                              {e.Qty}
                            </td>
                            <td className="p-2 text-black text-center">
                              {e.Side}
                            </td>
                            <td className="p-2 text-black text-center">
                              {e.EntryPrice}
                            </td>
                            <td className="p-2 text-black text-center">
                              {e.ExitPrice}
                            </td>
                            <td>
                              <div
                                className={`text-center ${
                                  Number(e.Pnl) < 0
                                    ? "text-white bg-red-600 h-[25px] rounded-full"
                                    : "text-white bg-green-500 h-[25px] rounded-full"
                                }`}
                              >
                                {Number(e.Pnl).toFixed(2)}
                              </div>
                            </td>

                            <td className="p-2 text-black text-center">
                              {e.Status}
                            </td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
