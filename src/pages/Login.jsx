import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitData = async (e) => {
    e.preventDefault();

    if (!password || !userName) {
      toast("Please enter email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: userName,
        password,
      });

      if (response.status === 200) {
        toast("Logged In");
        const { token, userInfo } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(token, userInfo);
        navigate("/");
      } else {
        throw new Error("Failed to log in.");
      }
    } catch (error) {
      toast("Failed to log in. Please check your credentials and try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl px-36 text-center mb-8">
        Hello, our valued visitors, we presents you Jamaica's most reliable
        courier service with a lot of flexibility. Just login to your account
        and enjoy.
      </h1>
      <div className="w-full max-w-sm">
        <form
          onSubmit={submitData}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 WiShip. All rights reserved.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
