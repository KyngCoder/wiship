import React, { useEffect, useState } from "react";
import wiship from "../assets/images/wiship.png";

import { AiFillHome } from "react-icons/ai";

import { MdDashboard } from "react-icons/md";
import {FaUsers} from 'react-icons/fa'
import { TbTruckDelivery, TbPackages } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import DropdownFilter from "../components/DropdownFilter";
import axios from "axios";
import Table from "../components/Table";

const AdminDashboard = () => {

  const [allPackages, setAllPackages] = useState(true)

  const [category, setCategory] = useState("member_no");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [packages, setPackages] = useState([]);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));

  const [pageNum, setPageNum] = useState(1);
  const [previousCount, setPreviousCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);

  const itemsPerPage = 5; // Number of items to display per page

  const fetchPackages = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/package`, {
        headers: {
          accessToken: accessToken,
        },
        params: {
          category: category,
          search: searchTerm,
          status: filter,
        },
      });
      const packages = response.data;
      setPackages(packages);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, [category, searchTerm, filter, pageNum]);

  const handleFilterChange = (selectedOption) => {
    setFilter(selectedOption);
  };

  const handlePreviousClick = () => {
    if (pageNum > 1) {
      setPageNum((prevPageNum) => prevPageNum - 1);
    }
  };

  const handleNextClick = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  useEffect(() => {
    const updatePagination = () => {
      setIsPreviousDisabled(pageNum === 1);
      setIsNextDisabled(packages.length < itemsPerPage);
      setPreviousCount(pageNum);
    };

    updatePagination();
  }, [pageNum, packages]);

  // Calculate the index of the first and last item to display
  const firstItemIndex = (pageNum - 1) * itemsPerPage;
  const lastItemIndex = firstItemIndex + itemsPerPage;

  // Slice the packages array based on the current page and items per page
  const displayedPackages = packages.slice(firstItemIndex, lastItemIndex);

   

    const options = [
        "All",
        "At Warehouse",
        "In Transit",
        "Local Arrival",
        "Pending Pickup",
        "Collected",
      ];
    
      const submit = (event) => {
        event.preventDefault();
        fetchPackages();
      };

    const navigate = useNavigate()

console.log(filter)

  return (
    <section className="p">
      <div className="h-24 w-screen primary-color px-16 text-white flex items-center justify-between">
        <div>
          <img className="w-20 h-20" src={wiship} />
        </div>

        <div className="flex items-center space-x-2">
          <p>John Does</p>

          <div class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              class="absolute w-10 h-10 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="primary-color pl-8 w-1/4 py-16 max-w-[200px] ">
          <NavLink>
            <div className="flex text-xl space-x-2 items-center text-white">
              <AiFillHome />
              <p>Home</p>
            </div>
          </NavLink>

          <NavLink>
            <div className="flex text-xl space-x-2 items-center my-6 text-white">
              <MdDashboard />
              <p>Dashboard</p>
            </div>
          </NavLink>

          <NavLink>
            <div className="flex text-xl space-x-2 my-6 items-center text-white">
              <TbTruckDelivery />
              <p>Track</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="flex text-xl space-x-2 my-6 items-center text-white">
              <TbPackages />
              <p>All Packages</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="flex text-xl space-x-2 my-6 items-center text-white">
              <FaUsers />
              <p>All Members</p>
            </div>
          </NavLink>
        </div>
        <div className="bg-white px-16 w-4/5 my-4">

        <div className="mt-8">
           <div className="flex justify-between">
           <h2 className="text-4xl font-bold mb-2">Dashboard</h2>

           </div>
            <hr />
          </div>

        <div className="flex mt-8 ">
            <div className="w-60 rounded-md m-4 ml-0 border border-[#263ba9]">
              <div className="w-full py-6 primary-color flex-col text-right pr-4 text-white">
                <p className="text-2xl font-semibold">$0</p>
                <p className="text-lg">Current Balance</p>
              </div>
              <div className="flex justify-between px-4 py-1 text-[#263ba9] items-center">
                <p className="text-lg font-medium">More Details</p>
                <p>
                  <BsFillArrowRightCircleFill />
                </p>
              </div>
            </div>

            <div className="w-60 rounded-md m-4 border border-orange-400">
              <div className="w-full py-6 bg-orange-400 flex-col text-right pr-4 text-white">
                <p className="text-2xl font-semibold">$0</p>
                <p className="text-lg">Current Balance</p>
              </div>
              <div className="flex justify-between px-4 py-1 text-orange-400 items-center">
                <p className="text-lg">More Details</p>
                <p>
                  <BsFillArrowRightCircleFill />
                </p>
              </div>
            </div>

            <div className="w-60 rounded-md m-4 border border-green-500">
              <div className="w-full py-6 bg-green-500 flex-col text-right pr-4 text-white">
                <p className="text-2xl font-semibold">$0</p>
                <p className="text-lg">Current Balance</p>
              </div>
              <div className="flex justify-between px-4 py-1 text-green-500 items-center">
                <p className="text-lg">More Details</p>
                <p>
                  <BsFillArrowRightCircleFill />
                </p>
              </div>
            </div>

            <div className="w-60 rounded-md m-4 border border-red-500">
              <div className="w-full py-6 bg-red-500 flex-col text-right pr-4 text-white">
                <p className="text-2xl font-semibold">$0</p>
                <p className="text-lg">Current Balance</p>
              </div>
              <div className="flex justify-between px-4 py-1 text-red-500 items-center">
                <p className="text-lg">More Details</p>
                <p>
                  <BsFillArrowRightCircleFill />
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={submit}>
      <div className="relative w-full">
        <div className="flex">
          <div className="rounded m-1 w-44 dark:bg-blue-700">
            <div className="flex p-2  items-center h-full">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="cursor-pointer  text-center w-full ring-opacity-0 
              bg-blue-600 outline-none text-white px-2 "
              >
                <option className="bg-gray-6200" value="member_no">
                  Member #
                </option>
                <option className="bg-gray-600" value="fullName">
                  Name
                </option>
                <option className="bg-gray-600" value="airwayBillNo">
                  Airway #
                </option>
              </select>
            </div>
          </div>
          <input
            type="search"
            id="search-dropdown"
            className="w-full bg-blue-700 mt-1 mb-1 p-2 text-white border-2 border-transparent hover:outline-none focus:outline-none mr-2 rounded-md"
            placeholder="Search Anime, Character, Random"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            type="submit"
            className="absolute top-1.5 right-3 p-2.5 text-sm font-medium text-white hover:bg-blue-900 hover:outline-none focus:outline-none"
          >
            <svg
              className="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </form>

          <div className="mt-8">
           <div className="flex justify-between">
           <h2 className="text-4xl font-bold mb-2">All Packages</h2>
           <button onClick={() => navigate("/addPackage")} className="bg-blue-400 py-3 px-6 rounded-md mb-4 text-2xl text-white font-bold">+ Add Package</button>
           </div>
            <hr />
          </div>

       <DropdownFilter options={options} onChange={handleFilterChange} />  
         
      
    <Table 
    displayedPackages={displayedPackages}
     />
 
    <nav className='mx-16 mb-4'  aria-label="Page navigation example">
  <ul class="inline-flex items-center space-x-2">
    <li onClick={handlePreviousClick}>
      <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white rounded-l-lg  ">
        <span class="sr-only">Previous</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li onClick={()=>setPageNum(1)}>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white ">{pageNum > 3? pageNum -3 : 1}</a>
    </li>
    <li onClick={()=>setPageNum(2)}>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white ">{pageNum > 3? pageNum - 2 : 2}</a>
    </li>
    <li onClick={()=>setPageNum(3)}>
      <a href="#" aria-current="page" class="px-3 py-2 leading-tight text-gray-500 bg-white ">{pageNum > 3? pageNum -1 : 3}</a>
    </li>
    
    <li onClick={handleNextClick} 
    
    >
      <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white rounded-r-lg  ">
        <span class="sr-only">Next</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</nav>

         
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
