import axios from "axios";
import React, { useEffect, useState } from "react";
import DropdownFilter from "./DropdownFilter";

import { toast, ToastContainer } from "react-toastify";

const AddPackages = () => {

  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"))
const [filter, setFilter] = useState("")

  const [formData, setFormData] = useState({
    member_no:"",
    fullName: "",
    description: "",
    deliveryStatus: "",
    status: filter,
    cost: "",
  
  });


  useEffect(() => {
setAccessToken(localStorage.getItem("accessToken"))
  }, [])

  const options = [
    "All",
    "At Warehouse",
    "In Transit",
    "Local Arrival",
    "Pending Pickup",
    "Collected",
  ];

  const handleFilterChange = (selectedOption) => {
    setFilter(selectedOption);
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      status: filter,
    }));
  }, [filter]);


  const handleClick = async (e) => {
    e.preventDefault();

    console.log(formData)
    console.log(accessToken)

    try {
      console.log(accessToken)
      const response = await axios.post(
        "http://localhost:3001/api/v1/package/new",
        formData,
        {
          headers: {
            accessToken: accessToken,
          },
        }
      );

     

      if (response.request.status.toString().slice(0,1) === "2") {
        toast("Package added successfully");
        // Reset the form or perform any other necessary actions
        setFormData({
          fullName: "",
          airwayBillNo: "",
          description: "",
          delivery: "",
          deliveryStatus: "",
          status: "",
          cost: "",
        });
      } else {
        console.log("Failed to add package");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(filter)

  return (
    <div className="form-container my-8 mx-auto w-screen m">
      <h1 className="text-4xl my-2 font-semibold">Add Package</h1>
      <hr />

      <form className="text-lg" onSubmit={handleClick}>
      <label htmlFor="member_no">Member No.</label> <br />
        <input
          name="member_no"
          type="text"
          id="member_no"
          value={formData.member_no}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="name">Name</label> <br />
        <input
          name="fullName"
          type="text"
          id="name"
          value={formData.fullName}
          onChange={handleChange}
        />{" "}
        <br />
       
       
        <label htmlFor="description">Description</label> <br />
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />{" "}
        <br />
       
        <label htmlFor="status">Status</label>
     <div className="w-[280px]">
     <DropdownFilter options={options} onChange={handleFilterChange} />  
     </div>
     
        <label htmlFor="package_status">Package Status</label> <br />
        <input
          name="deliveryStatus"
          type="text"
          id="package_status"
          value={formData.deliveryStatus}
          onChange={handleChange}
        />{" "}
        <br /> 
        <label htmlFor="package_cost">Package Cost</label> <br />
        <input
          name="cost"
          type="text"
          id="package_cost"
          value={formData.cost}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <button id="btnAddPackage" type="submit">
          Add Package
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddPackages;
