import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isLoggedIn, setIsLogedIn] = useState(false);

  const [userInfo, setUserInfo] = useState([]);

  const getUser = async () => {
    const isValid = localStorage.getItem("accessToken");

    if (isValid) {
      console.log(isValid);
      setIsLogedIn(true);
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    }
  };

  const [showPopover, setShowPopover] = useState(false);

  const popoverRef = useRef(null);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout");
    // Close the popover after logout
    setShowPopover(false);
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("userInfo")
      setShowPopover(false);
      window.location.reload()
    }
  };


  
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


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
         <div className="relative" ref={popoverRef}>
         <div
           className="cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
           onClick={() => setShowPopover(!showPopover)}
         >
           <span className="font-bold text-gray-600 capitalize dark:text-gray-300">
             {userInfo?.firstName?.slice(0, 1)}
           </span>
         </div>

         {showPopover && (
           <div className="absolute border-b-2 border-blue-400 bg-white rounded-md shadow-md p-2 right-0 mt-2">
             <button
               className="text-red-500 bg-green-300 hover:text-red-700 cursor-pointer"
               onClick={handleLogout}
             >
               Logout
             </button>
           </div>
         )}
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
