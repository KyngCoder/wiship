import React, { useEffect, useState } from "react";
import wiship from "../assets/images/wiship.png";

import { AiFillHome } from "react-icons/ai";
import {GoKebabVertical} from 'react-icons/go'
import { MdDashboard } from "react-icons/md";
import {FaUsers} from 'react-icons/fa'
import { TbTruckDelivery, TbPackages } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import DropdownFilter from "../components/DropdownFilter";
import axios from "axios";

const AdminDashboard = () => {

    const [category, setCategory] = useState("member_no");
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [packages, setPackages] = useState([]);
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"))
   
    
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
        console.error('Error fetching packages:', error);
      }
    };
    
    useEffect(() => {
   
      fetchPackages();
    }, [category, searchTerm, filter]);
    
    const handleFilterChange = (selectedOption) => {
      setFilter(selectedOption);
    };
    
    const submit = (event) => {
      event.preventDefault();
      fetchPackages();
    };

    const options = [
        "All",
        "At Warehouse",
        "In Transit",
        "Local Arrival",
        "Pending Pickup",
        "Collected",
      ];
    
  

    const navigate = useNavigate()



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
         
      
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Member NO.
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Full Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Airway Bill No
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Delivery
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Cost
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {packages?.map((pkg) => (
          <tr key={pkg.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.member_no}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.fullName}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.airwayBillNo}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.description}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.deliveryStatus ? 'yes' : 'no'}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{pkg.status}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">${pkg.cost}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900"><GoKebabVertical /></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
 

         
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
