import React from "react";

const Services = () => {
  return (
    <section className="flex-cols mb-8 text-[#263ba9]">
      <div>
        <h2 className=" text-4xl font-bold  mb-2 py-8 text-center">
          Services
        </h2>
        <p className="mb-40 px-48 text-2xl text-center ">At WiShip Courier we pride ourselves on making our clients more efficient in many ways, our schedules and services are designed to offer the optimal mix of convenience and affordability, we are open from 6 am for our early bird requests and as late as 8 pm.</p>
        <div className="flex justify-center space-x-24">
          <div class="box">
            <div class="circle"></div>
            <h2 className="mt-28 text-center font-bold text-2xl my-4">Air Freight</h2>
          
            <p className="text-center px-20 text-xl leading-loose">To ensure fast delivery of our customer’s packages we have scheduled delivery to be made by plane twice weekly for our standard shipping. We also offer next day shipping by plane to facilitate customers who need urgent shipping.</p>
          </div>

          <div class="box">
            <div class="circle2"></div>
            <h2 className="mt-28 text-center font-bold text-2xl my-4">Ocean Freight</h2>
          
          <p className="text-center px-20 text-xl leading-loose">For customers desiring to import those “too large for plane” items we are able to facilitate you. Yes! You can import cars, boats, trucks, containers and a whole lot more through WiShip Courier.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
