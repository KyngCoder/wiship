import React from "react";
import ContactBanner from "../components/ContactBanner";
import ContactCenter from "../components/ContactCenter";

const ContactUs = () => {
  return (
    <div>
      <ContactBanner />
      <ContactCenter />
      <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 className="text-[#263ba9] text-2xl mb-4">
          <span className=" border-b-blue-900 border-b-4 ">Get In </span>
          <span>touch</span>
        </h2>

        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="subject">
              Subject
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Enter subject"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="message">
              Message
            </label>
            <textarea
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
