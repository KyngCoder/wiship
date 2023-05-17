import React, { useState } from "react";

const DropdownFilter = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div className="relative my-4">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M11 16l4-4h-3V8h-2v4H7l4 4zm-1-6H9v2H7v-2H5V9h2V7h2v2h2v2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default DropdownFilter;
