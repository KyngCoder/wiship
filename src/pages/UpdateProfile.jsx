import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify'

const UpdateProfile= () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve user information from localStorage
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { id, firstName, lastName } = JSON.parse(userInfo);
      setUserId(id);
      setFirstName(firstName);
      setLastName(lastName);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3001/api/v1/auth/${userId}`,
        {
          firstName,
          lastName,
          password,
          oldPassword,
        }
      );

      toast("User profile updated successfully");

      // Reset the form
      setFirstName("");
      setLastName("");
      setPassword("");
      setOldPassword("");
    } catch (error) {
      toast("Incorrect Password");
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-2xl font-semibold mb-4">Update User Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="oldPassword" className="block mb-2 font-medium">
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
