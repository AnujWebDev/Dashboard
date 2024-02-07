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
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { LiaCoffeeSolid } from "react-icons/lia";
import { LiaEnvelopeSolid } from "react-icons/lia";
import Profile from "../assets/Profile.png"

import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const AdminDashboard = () => {
  const entryData = useContext(AppContext);
  const { admin } = useContext(AppContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [Stratergy, setStrategy] = useState("");
  const [Script, setScript] = useState("");
  const [Qty, setQty] = useState(0);
  const [Side, setSide] = useState("BUY");
  const [EntryPrice, setEntryPrice] = useState(0);
  const [ExitPrice, setExitPrice] = useState(0);
  const [Status, setStatus] = useState("CLOSED");

  useEffect(() => {
    const fetchEntryBYId = async () => {
      const api = await axios.get(`${entryData.url}/entry/${entryData.id}`, {
        headers: {
          "Content-Type": "application/json",
          Auth: entryData.token,
        },
        withCredentials: true,
      });
      let entry = api.data.entry;
      console.log("useEffect id", entry);
      setStrategy(entry.Stratergy);
      setScript(entry.Script);
      setQty(entry.Qty);
      setSide(entry.Side);
      setEntryPrice(entry.EntryPrice);
      setExitPrice(entry.ExitPrice);
      setStatus(entry.Status);
    };
    fetchEntryBYId();
  }, [entryData.id]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(
      "getting form data =",
      Stratergy,
      Script,
      Qty,
      Side,
      EntryPrice,
      ExitPrice,
      Status
    );
    if(entryData.id === " ") {
      await entryData.addEntry({
        Stratergy,
        Script,
        Qty,
        Side,
        EntryPrice,
        ExitPrice,
        Status,
      });

      entryData.setReload(!entryData.reload);
      // const response = entryData.addEntry;
      // console.log("entry", response.message);

      toast.success("Entry Added Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const updateEntry = async (id) => {
        const api = await axios.put(
          `${entryData.url}/entry/${id}`,
          {
            Stratergy,
            Script,
            Qty,
            Side,
            EntryPrice,
            ExitPrice,
            Status,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Auth: entryData.token,
            },
            withCredentials: true,
          }
        );

        entryData.setReload(!entryData.reload);
        console.log(api);
      };
     updateEntry(entryData.id);
      toast.success("Entry Edited Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      closeModal();
      
    }
    entryData.setId(" ");

  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    
    const roundedTotalPnl = Number(totalPnl.toFixed(1));
    
    return roundedTotalPnl;
};



  const todayProfitOrLoss = calculateTodayProfit();
  console.log("todayProfitOrLoss", todayProfitOrLoss);

  return (
    <>
      <ToastContainer />
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
                <div className="absolute z-0 bottom-4 right-[166px] -mt-1 -mr-1 bg-red-600 p-3 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
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
              className={`flex flex-col items-center ${
                isSidebarOpen ? "mr-52" : ""
              }`}
            >
              {entryData.isAdminAuthenticated && (
                <div className="flex justify-end  mt-2">
                  <img src={Profile} className="w-[10px] h-[20px] mt-4 mr-1" alt="profile icon"></img>
                  <Link
                    style={{ fontFamily: "PT Sans, sans-serif" }}
                    className="flex flex-col text-sm mr-10 p-3 py-1 rounded-lg font-bold mb-2"
                  >
                    {admin?.Adminname}
                    <span className="text-sm">{"(admin)"}</span>
                  </Link>
                </div>
              )}

              {entryData.isAdminAuthenticated && (
                <Link
                  onClick={entryData.AdminLogout}
                  to={"/adminlogin"}
                  className="ml-10 mr-20 text-gray-300 relative top-[-14px] left-[-35px] lg:mr-10 text-sm"
                >
                  Logout
                </Link>
              )}
              {!entryData.isAdminAuthenticated && (
                <Link
                  to={"/adminlogin"}
                  className="ml-10 mr-20 lg:mr-10 text-sm"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div
            className={`flex-1 transition-all z-0 ${
              isSidebarOpen ? "ml-0" : "ml-0"
            }`}
          >
            <div className="flex-1 mt-24 flex-col overflow-y-scroll transition-all">
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
                      {(todayProfitOrLoss).toFixed(1)}
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
                          whiteSpace: "nowrap"
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
                        whiteSpace: "nowrap"
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
                        whiteSpace: "nowrap"
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
                <div className="bg-white rounded-lg w-full overflow-y-scroll overflow-x-scroll h-[430px]">
                  <div className=" lg:w-full flex border w-[700px] shadow-lg p-5  font-bold">
                    <p
                      style={{
                        fontFamily: "Poppins",
                        sansSerif: "sans-serif",
                        fontWeight: "bold",
                      }}
                      className="text-black text-2xl mt-2 "
                    >
                      Recent Trades
                    </p>
                    <button
                      className="bg-red-500 mt-2 text-sm rounded-xl ml-5 border text-white px-3 hover:bg-white hover:text-black"
                      onClick={() => {
                        entryData.setId(" ");
                        openModal();
                      }}
                    >
                      Add Entry
                    </button>
                    <Link to={'/allusers'}
                      className="bg-red-500 mt-2 text-sm rounded-xl ml-5 border text-white px-3 pt-1 hover:bg-white hover:text-black"
                    >
                      All Users
                    </Link>
                  </div>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <button
                      onClick={closeModal}
                      className="float-right m-3 p-2 border hover:bg-red-500 hover:text-white rounded-full  text-red-500"
                    >
                      x
                    </button>
                    <form
                      onSubmit={SubmitHandler}
                      className="w-80 p-6 bg-white rounded-lg shadow-md"
                    >
                      <div className="mb-2">
                        <label
                          htmlFor="Strategy"
                          className="block text-sm font-bold text-gray-600"
                        >
                          Strategy:
                          <input
                            type="text"
                            id="Strategy"
                            name="Strategy"
                            value={Stratergy}
                            onChange={(e) => setStrategy(e.target.value)}
                            className="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                          />
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="Script"
                          className="block text-sm font-bold text-gray-600"
                        >
                          Script:
                          <input
                            type="text"
                            id="Script"
                            name="Script"
                            value={Script}
                            onChange={(e) => setScript(e.target.value)}
                            className="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                          />
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="qty"
                          className="block text-sm font-bold text-gray-600"
                        >
                          Quantity:
                          <input
                            type="text"
                            id="qty"
                            name="qty"
                            value={Qty}
                            onChange={(e) => setQty(e.target.value)}
                            className="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                          />
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="side"
                          className="block text-sm font-bold text-gray-600"
                        >
                          Side:
                          <select
                            id="side"
                            name="side"
                            value={Side}
                            onChange={(e) => setSide(e.target.value)}
                            className="form-select mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                          >
                            <option value="BUY">BUY</option>
                            <option value="SELL">SELL</option>
                          </select>
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="entryPrice"
                          className="block text-sm font-bold text-gray-600"
                        >
                          Entry Price:
                          <input
                            type="text"
                            id="entryPrice"
                            name="entryPrice"
                            value={EntryPrice}
                            onChange={(e) => setEntryPrice(e.target.value)}
                            className="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                          />
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exitPrice"
                          className="block text-sm font-bold text-gray-600"
                        >
                          Exit Price:
                          <input
                            type="text"
                            id="exitPrice"
                            name="exitPrice"
                            value={ExitPrice}
                            onChange={(e) => setExitPrice(e.target.value)}
                            className="form-input mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                          />
                        </label>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="Status"
                          className="block text-sm font-bold text-gray-600"
                        >
                          Status:
                          <select
                            id="Status"
                            name="Status"
                            value={Status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="form-select mt-1 block w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                          >
                            <option value="CLOSED">CLOSED</option>
                            <option value="OPEN">OPEN</option>
                          </select>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                      >
                        Submit
                      </button>
                    </form>
                  </Modal>
                  <div className="p-3">
                          {entryData &&
                          entryData.entry &&
                          entryData.entry.length > 0 ? (
                    <table className=" w-full">
                      <thead className="w-full border-y hover:bg-blue-200">
                        <tr className="">
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
                            className="p-2 text-black text-left font-bold"
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
                          <th
                            style={{
                              fontFamily: "Poppins",
                              sansSerif: "sans-serif",
                            }}
                            className="p-2 text-white text-left font-bold"
                          >
                            edit
                          </th>
                          <th
                            style={{
                              fontFamily: "Poppins",
                              sansSerif: "sans-serif",
                            }}
                            className="p-2 text-white text-left font-bold"
                          >
                            delete
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
                                className="p-2 text-black"
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
                              <td>
                                <button
                                  onClick={() => {
                                    entryData.setId(e._id);
                                    openModal();
                                  }}
                                  className="text-white bg-blue-400 border rounded-lg px-2"
                                >
                                  Edit
                                </button>
                              </td>
                              <td>
                                {entryData.isAdminAuthenticated && (
                                  <button
                                    onClick={async () => {
                                      const res = await entryData.DeleteEntry(
                                        e._id
                                      );
                                      console.log("Entry Deleted", res);
                                      console.log("deleted id",e._id)
                                      toast.success(`${res.message}`, {
                                        position: "top-right",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                      });
                                      entryData.setReload(!entryData.reload);
                                    }}
                                    className="text-white bg-red-500 text-3xl border rounded-lg"
                                  >
                                    <RiDeleteBinLine />
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                        ) : (
                          <div style={{
                            fontFamily: "Poppins",
                            sansSerif: "sans-serif",
                          }} className="w-full text-center text-2xl text-black  p-4">
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

export default AdminDashboard;
