import axios from "axios";
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const parishes = [
  "Kingston",
  "St. Andrew",
  "St. Catherine",
  "Clarendon",
  "Manchester",
  "St. Elizabeth",
  "Westmoreland",
  "Hanover",
  "St. James",
  "Trelawny",
  "St. Ann",
  "St. Mary",
  "Portland",
];

const pickupLocations = [
  "Kingston",
  "Montego Bay",
  "Ocho Rios",
  "Negril",
  "Port Antonio",
];

const Register = () => {
  const [formData, setFormData] = useState({
    "firstName": "Ric",
    "lastName": "Mert",
    "telephone": "+1 (876) 456-7890",
    "city": "Kingston",
    "parish": "St. Andrew",
    "address": "123 Main St.",
    "pickup_location": "456 Elm St.",
    "userName": "pete",
    "email":"pete@gmail.com",
    "password": "ricky$123"
   
  });

  const [confirmPassword, setConfirmPassword] = useState(" ")

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(formData)) {
      if (value === "") {
        toast(`${key} is a required field`);
        return;
      }
    }

    if (formData.password !== confirmPassword) {
      toast("Passwords do not match");
      return;
    }

    try {
      console.log(formData)
      const response = await axios.post(
        "http://localhost:3001/api/v1/auth/register",
        formData
      );

      console.log(response.data); // Handle the response as needed

      // Clear the form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        address: "",
        city: "",
        parish: "",
        pickup_location: "",
        userName: "",
        password: "",
      });

      console.log(response.data.token);

      localStorage.setItem("accessToken", response.data.token);

      toast("Successfully submitted");
    } catch (error) {
      console.error("Error registering user:", error);
    }

   
  };




  return (
    <div className="bg-white shadow-md w-1/2 mx-auto mt-20 rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div className="flex flex-row justify-between mb-4">
        <h2 className="font-bold text-xl mb-2 underline">Register</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="telephone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="Enter your telephone number"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4 flex items-center space-x-2 justify-between">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2 mt-4"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </div>

            <div>
              <label
                className=" block text-gray-700 font-bold mb-2 mt-4 "
                htmlFor="city"
              >
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2 mt-4"
                htmlFor="parish"
              >
                Parish
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="parish"
                name="parish"
                value={formData.parish}
                onChange={handleChange}
              >
                <option value="">Select Parish</option>
                {parishes.map((item, index) => {
                  return (
                    <option key={`${item}-${index}`} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-5 my-2">
            <div className=" ">
              <label className=" text-gray-700 font-bold mb-2" htmlFor="parish">
                Pick up location
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="parish"
                name="pickup_location"
                value={formData.pickup_location}
                onChange={handleChange}
              >
                <option value="formData.">Select Parish</option>
                {pickupLocations.map((item, index) => {
                  return <option value={`${item}-${index}`}>{item}</option>;
                })}
              </select>
            </div>

            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="userName"
              >
                userName
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userName"
                name="userName"
                type="text"
                placeholder="Enter a userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Repeat password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <button className="primary-color font-semibold px-6 py-2 rounded-md my-8 text-xl  text-white">
              Register
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
