import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import bannerImage from "../assets/images/box8.jpg";

export const Banner = () => {
  return (
    <section className="px-28 h-[900px] w-screen pt-24 relative -mb-24">
      <div className="text-4xl flex-col space-y-1 text-[#263ba9]  z-50 font-bold absolute">
        <h2>WiShip Courier Provides the</h2>

        <h2>
          best <span className="text-[#cb9223]">Courier </span>and{" "}
          <span className="text-[#cb9223]">Parcel</span>
        </h2>
        <h2 className="">Services</h2>

        <div >
          <button className="bg-blue-400 mt-20  px-4 rounded-md flex items-center py-3 text-xl text-white ">
            Sign up It's FREE <AiOutlineArrowRight className="ml-1" />
          </button>
        </div>
      </div>

      <div className="max-w-[820px] absolute right-0 top-96 mt-8  xl:top-0  ">
        <img src={bannerImage} />
      </div>
    </section>
  );
};
