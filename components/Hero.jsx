import React from "react";

const Hero = () => {
  return (
    <div className="  md:w-screen  px-2 py-2  bg-blue-700 mx-auto h-auto md:py-10">
      <div className="flex flex-col">
        <div className="flex my-5 justify-center flex-col text-white items-center">
          <h2 className="md:text-4xl font-bold text-sans text-2xl">
            Find The Perfect Rental
          </h2>
          <span className="text-xl mt-3">
            Discover the Perfect Property that suits your needs
          </span>
        </div>
        <div className="flex gap-3 mx-auto">
          <input
            className="flex px-5 py-2 rounded-xl"
            placeholder="Enter Location"
            type="text"
          />

          <div className="md:w-2/5 w-full md:pl-2">
            {" "}
            <select
              name=""
              className="w-full px-3 py-2 rounded-xl"
              id="property-type"
            >
              <option value="All">All</option>
              <option value="Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="Condo">Condo</option>
              <option value="House">House</option>
              <option value="Cabin or Cottage">Cabin or Cottage</option>
              <option value="Loft">Loft</option>
              <option value="Room">Room</option>
            </select>
          </div>
          <button className="bg-blue-400 px-2 py-2 rounded-xl text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
