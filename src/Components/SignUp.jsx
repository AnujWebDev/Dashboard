import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";

const SignUp = () => {
  return (
    <div className=' min-h-screen bg-[rgb(21,32,43)]'>
        <Link
          to={"/"}
          className="p-3  hover:cursor-pointer bg-orange text-center flex font-plus-jakarta-sans text-white w-20 rounded-full transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
        >
          <TiArrowBack className="text-4xl ml-2" />
        </Link>
      <div className="flex bg-[rgb(21,32,43)] items-center justify-center h-screen">
        <div className="p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold text-white mb-4">Sign Up</h2>

          <form>
            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"

              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full text-white p-2 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>

          <p className="text-white text-sm mt-4">
            Already a member?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
