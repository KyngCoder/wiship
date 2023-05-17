import React from "react";

import {AiOutlineMail} from 'react-icons/ai'
import {IoIosCall} from 'react-icons/io'
import {TbClockHour7} from 'react-icons/tb'

const ContactCenter = () => {
  return (
    <div className="flex justify-between px-16 mt-48 text-[#263ba9] h-screen">
      <div className="w-1/5 flex-cols">
        <div>
          <h2 className="font-bold text-4xl mb-4">Kingston</h2>
        </div>
        <div className="text-xl mb-4 ">
            <h2>95 1/2 Hagley Park Rd,</h2>
            <h2>Kingston, Jamaica</h2>
        </div>
        <div className="shadow-md py-8 pl-4">
            <div className="flex space-x-1 items-center">
                <AiOutlineMail />
                <p className="font-semibold text-2xl">Email Us</p>
            </div>
            <div>
                <p>wishipcourier@gmail.com</p>
            </div>
        </div>
        <div className="shadow-md py-8 pl-4">
            <div className="flex space-x-1 items-center">
                <IoIosCall />
                <p className="font-semibold text-2xl">Call Us</p>
                
            </div>
            <div>
            <p>1 (876) 457-9546</p>
            <p>1 (876) 457-9546</p>
            </div>
        </div>
        <div className="shadow-md py-8 pl-4">
            <div className="flex space-x-1 items-center">
                <TbClockHour7 />
                <p className="font-semibold text-2xl">Opening Hours</p>
            </div>
            <div>
                <p>Mon - Fri: 10:00am - 5:00pm</p>
                <p>Sat: 10:00am - 3:00pm</p>
            </div>
        </div>
      </div>

      <div className="4/5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.3158215922876!2d-76.8013606899014!3d18.010540982915895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3fb6e6dd419f%3A0xed6466129afaaea9!2s95%201%2C%202%20Hagley%20Park%20Rd%2C%20Kingston!5e0!3m2!1sen!2sjm!4v1683405162890!5m2!1sen!2sjm"
          width="800"
          height="550"
       
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactCenter;
