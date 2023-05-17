import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isLoggedIn, setIsLogedIn] = useState(false);

  const [userInfo, setUserInfo] = useState([]);

  const getUser = async () => {
    const isValid = localStorage.getItem("token");

    if (isValid) {
      console.log(isValid);
      setIsLogedIn(true);
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(userInfo);

  return (
    <section className="px-16 flex justify-between primary-color h-16 w-screen items-center">
      <div>
        {/* logo */}
        hhhhh
      </div>
      <div className=" space-x-8 text-white hidden md:flex">
        {/* navigation */}

        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <h3>Services</h3>
        <h3>About Us</h3>
        <NavLink to="/rates">
          <h3>Rates</h3>
        </NavLink>
        <NavLink to="/contact">
          <h3>Contact Us</h3>
        </NavLink>
      </div>
      <div className="hidden md:flex space-x-8 ">
        {/* registraion */}

        {isLoggedIn ? (
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span class="font-bold text-gray-600 capitalize dark:text-gray-300">
              {userInfo?.first_name?.slice(0, 1)}
            </span>
          </div>
        ) : (
          <div className="flex  space-x-5 items-center">
            <NavLink to="/login">
              <button className="border-2 rounded-md border-[#ffd075] px-5 py-1 text-[#ffd075] flex items-center">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="color-two px-4 py-1 rounded-md font-semibold text-[#263ba9]">
                Register
              </button>
            </NavLink>
          </div>
        )}
      </div>

      <div className="flex md:hidden">
        <RxHamburgerMenu className="text-[#ffd075] text-2xl" />
      </div>
    </section>
  );
};
