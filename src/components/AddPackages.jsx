import React from 'react';

const AddPackages = () => {

    const handleClick = () => {}

  return (
    <div className="form-container my-8 mx-auto w-screen m">
      <h1>Add Package</h1>
      <hr />
    
      <form method="" action="">
        <label htmlFor="member_no">Member No.</label> <br />
        <input type="text" id="member_no" /> <br />
    
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" /> <br />
    
        <label htmlFor="airway_bill_no">Airway Bill No.</label> <br />
        <input type="text" id="airway_bill_no" /> <br />
    
        <label htmlFor="description">Description</label> <br />
        <input type="text" id="description" /> <br />
    
        <label htmlFor="delivery">Delivery</label> <br />
        <input type="text" id="delivery" /> <br />
    
        <label htmlFor="status">Status</label> <br />
        <input type="text" id="status" /> <br />
    
        <label htmlFor="package_cost">Package Cost</label> <br />
        <input type="text" id="package_cost" /> <br /> <br />
    
        <button id="btnAddPackage" onClick={handleClick}>Add Package</button>
      </form>
    </div>
  );
};

export default AddPackages;
