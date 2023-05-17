import React from "react";
import wiship from "../assets/images/wiship.png";

import { AiFillHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const UserDashboard = () => {
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
            <div className="flex text-xl space-x-2 items-center text-white">
              <TbTruckDelivery />
              <p>Track</p>
            </div>
          </NavLink>
        </div>
        <div className="bg-white px-16 w-4/5 my-4">
          <div className="mt-8">
            <h2 className="text-4xl font-bold mb-2">Dashboard</h2>
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
          <div className="flex items-center  ">
            <div className="w-3/4 border-blue-400 border rounded-md p-4 bg-blue-400 ">
              <p className="pt-2">Ready for pickup:</p>
              <p className="pb-4 text-lg">Below will show the items ready at the counter for pickup</p>

              <div>
                <div class="relative overflow-x-auto ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Tracking #
                        </th>
                        <th scope="col" class="px-6 py-3">
                         Sender
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Date Arrived
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Weight (lb)
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          6r766gguk
                        </th>
                        <td class="px-6 py-4">Saint Paul</td>
                        <td class="px-6 py-4">02/13/23</td>
                        <td class="px-6 py-4">9</td>
                        <td class="px-6 py-4">
                          <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Blaksskekwjwofoo....
                          </a>
                        </td>
                      </tr>
                    
                        
                    
                      <tr>
                       
                       
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="1/4 border border-red-400 ml-4 rounded-md ">
                <div className="text-red-400 bg-red-100 p-2">
                    <p className="font-semibold">Shipping Address</p>
                    <p>Below you will your shipping address along with mailbox number</p>
                </div>
                <div className="p-4">
                    <h3>Name: </h3>
                    <h3>Address Line 1: </h3>
                    <h3>Address Line 2: </h3>
                    <h3>city: </h3>
                    <h3>State: </h3>
                    <h3>Zip Code: </h3>
                    <h3>Country: </h3>
                </div>
            </div>
          </div>
          <div className="w-3/4 mt-4 border-gray-400 border rounded-md p-4 bg-gray-400 ">
              <p className="pt-2">Ready for pickup:</p>
              <p className="pb-4 text-lg">Below will show the items ready at the counter for pickup</p>

              <div>
                <div class="relative overflow-x-auto ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Tracking #
                        </th>
                        <th scope="col" class="px-6 py-3">
                         Sender
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Date Arrived
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Weight (lb)
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          6r766gguk
                        </th>
                        <td class="px-6 py-4">Saint Paul</td>
                        <td class="px-6 py-4">02/13/23</td>
                        <td class="px-6 py-4">9</td>
                        <td class="px-6 py-4">
                          <a
                            href="#"
                            class="font-medium text-gray-600 dark:text-gray-500 hover:underline"
                          >
                            Blaksskekwjwofoo....
                          </a>
                        </td>
                      </tr>
                    
                        
                    
                      <tr>
                       
                       
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
