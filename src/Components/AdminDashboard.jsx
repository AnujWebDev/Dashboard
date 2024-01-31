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
import { BsCupHot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiDeleteBinLine } from "react-icons/ri";
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
  const [Status, setStatus] = useState("Open");

  
  useEffect(() => {
    const fetchEntryBYId = async () => {
      const api = await axios.get(`${entryData.url}/entry/${entryData.id}`, {

        headers: {
          "Content-Type": "application/json",
          Auth:entryData.token
        },
        withCredentials: true,
      });
      let entry=api.data.entry
      console.log("useEffect id",entry);
      setStrategy(entry.Stratergy);
      setScript(entry.Script);
      setQty(entry.Qty);
      setSide(entry.Side);
      setEntryPrice(entry.EntryPrice);
      setExitPrice(entry.ExitPrice);
      setStatus(entry.Status)
      
    };
   fetchEntryBYId()
    
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
    if(!entryData.id){
      
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
    const response = entryData.addEntry;
    console.log("entry", response.message);
    // console.log("message",entryData.data.message)
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
  }else{
    // await entryData.updateEntry({
    //   Stratergy,
    //   Script,
    //   Qty,
    //   Side,
    //   EntryPrice,
    //   ExitPrice,
    //   Status,
    // })
    const updateEntry=async(id)=>{
      const api = await axios.put(
        `${entryData.url}/entry/${id}`,
        {
          Stratergy,Script,Qty,Side,EntryPrice,ExitPrice,Status
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth:entryData.token
          },
          withCredentials: true,
        }
      );
  
      entryData.setReload(!entryData.reload);
      console.log(api);
    }
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
    closeModal()

  }
  entryData.setId(" ")
  
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


  // Example usage with 2 decimal places
  const result = calculateTodayProfit();
  console.log(result);

  const todayProfitOrLoss = calculateTodayProfit();
  console.log("todayProfitOrLoss",todayProfitOrLoss)
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
              {entryData.isAdminAuthenticated && (
                <div className="flex justify-end ">
                  <LiaUserTieSolid className="text-2xl mr-3" />
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
                  className="ml-10 mr-20 relative top-[-14px] left-[-27px] lg:mr-10 text-sm"
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
            <div className="flex-1 mt-16 flex-col overflow-y-scroll transition-all">
              <div className="flex flex-col lg:flex-row justify-between gap-2 p-5">
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
                                style={{
                                  color:
                                    todayProfitOrLoss < 0 ? "red" : "green",
                                  fontSize: "2xl", 
                                }}
                              >
                                {todayProfitOrLoss < 0 ? "-" : ""}
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
                  <div className=" lg:w-full flex border w-[700px] shadow-lg p-5  font-bold">
                    <h1 className="text-black text-xl mt-2 ">Recent Trades</h1>
                    <button
                      className="bg-red-500 mt-2 text-sm rounded-xl ml-5 border text-white px-3 hover:bg-white hover:text-black"
                      onClick={openModal}
                    >
                      Add Entry
                    </button>
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
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
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
                            <td>
                              <button onClick={()=>{entryData.setId(e._id),openModal()}} className="text-white bg-blue-400 border rounded-lg px-2  ">
                                Edit
                              </button>
                            </td>
                            <td>
                              {entryData.isAdminAuthenticated &&(
                              <button
                                onClick={async () => {
                                  const res = await entryData.DeleteEntry(
                                    e._id
                                  );
                                  console.log("Entry Deleted", res);
                                  toast.success(`${res.message}`, {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                  });
                                  entryData.setReload(!entryData.reload);
                                }}
                                className="text-white bg-red-500 text-3xl border rounded-lg  "
                              >
                                <RiDeleteBinLine />
                              </button>
                              )}
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

export default AdminDashboard;
