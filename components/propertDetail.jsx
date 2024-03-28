import Link from "next/link";
import React from "react";
import { FaBed, FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import {
  FaMarker,
  FaBath,
  FaCheck,
  FaRulerCombined,
  FaTimes,
  FaMapMarker,
} from "react-icons/fa";
const PropertiesDetail = ({ property }) => {
  console.log(property);
  return (
    <div className="max-w-5xl mx-auto gap-10 flex md:flex-row flex-col">
      <section className=" w-full flex flex-col py-10  mx-auto">
        <div className="flex justify-center">
          <Link href="/">
            <button className="text-slate-700 font-bold md:text-3xl text-xl py-5 px-10 rounded-xl ">
              Back to Properties
            </button>
          </Link>
        </div>

        <div className="w-full container h-[300px]  bg-white  shadow-xl shadow-black">
          <div>
            <span className="px-2 py-2">
              <span className="text-slate-300 py-2">{property.type}</span>
            </span>
          </div>
          <div className="w-full flex-col flex ">
            <div>
              <h2 className="px-2 py-2 font-bold text-2xl">{property.name}</h2>
            </div>

            <div className="px-2  py-2">
              <span className="text flex  gap-2 text-red-500 font-bold">
                {" "}
                <FaMarker />
                {property.location.street}, {property.location.city}{" "}
                {property.location.state}
              </span>
            </div>
          </div>
          <div className="w-full bg-black px-2 py-2">
            <span className="md:text-2xl text-xl text-white">
              Rates & Options
            </span>
          </div>
          <div className="flex justify-around w-full py-5 items-center px-2">
            <span className="flex items-center gap-2">
              Nightly
              {property.rates.nightly ? (
                `${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </span>

            <span>
              Weekly{" "}
              <span className="text-blue-500 text-xl">
                {" "}
                {property.rates.weekly ? (
                  `${property.rates.weekly.toLocaleString()}`
                ) : (
                  <FaTimes className="text-red-700" />
                )}
              </span>
            </span>
            <span>
              Monthly{" "}
              <span className="text-blue-500 text-xl">
                {" "}
                {property.rates.monthly ? (
                  `${property.rates.monthly.toLocaleString()}`
                ) : (
                  <FaTimes className="text-red-700" />
                )}
              </span>
            </span>
          </div>
        </div>

        <div className="w-full border rounded-xl  space-y-4 mt-5 bg-white shadow-xl ">
          <div className="px-2 py-3 ">
            <span className="font-bold md:text-xl text-lg">
              Description $ Details
            </span>
          </div>
          <div className="flex justify-center gap-5">
            <span className="text-blue-300 items-center flex gap-2">
              <FaBed className="text-red-500" />
              {property.beds}beds
            </span>
            <span className="text-blue-300">{property.baths}Baths</span>
            <span className="text-blue-300">{property.square_feet}Sqrt</span>
          </div>
          <div className="w-full py-2 px-3">
            <span className="text-slate-400 text-center">
              {property.description}
            </span>
          </div>
        </div>

        <div className="w-full border rounded-xl   space-y-4 mt-5 bg-white shadow-xl ">
          <div className="flex px-2 py-3">
            <h2 className="py-2 text-center font-bold">Amenties</h2>
          </div>

          <ul className="grid grid-cols-3 md:grid-cols-2 space-y-2   lg:grid-cols-3 lins-none">
            {property.amenities.map((amentity, index) => (
              <li key={index}>
                <FaCheck className="text-green-600 mr-2 inline-block"></FaCheck>
                {amentity}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 py-5 bg-white shadow-xl my-5 rounded-xl"></div>
        <div className="px-5 py-3 bg-blue-500  shadow-xl my-5 rounded-xl">
          <div className="flex justify-center">
            <button className="text-center text-white ">
              BookMark Property
            </button>
          </div>
        </div>

        <div className="px-3 py-3 bg-red-300 flex justify-center text-white rounded-xl shadow-xl ">
          <button>Share Property</button>
        </div>
      </section>

      <div className="md:w-1/2 w-full py-20 px-2 gap-3">
        <div clssName="py-2 px-2 ">
          <button className="py-2 px-3 bg-blue-500 text-white w-full rounded-xl">
            Add BookMark
          </button>
        </div>

        <div className="py-10">
          <div className="py-3 text-xl font-bold px-2 text-center">
            Share This Property
          </div>
          <div className="flex gap-3 justify-center items-center">
            <FaFacebook className="text-2xl text-blue-500" />
            <FaTwitter className="text-2xl " />
            <IoIosCall className="text-3xl bg-green-300 rounded-xl text-white " />
            <MdEmail className="text-3xl rounded-xl bg-slate-300 " />
          </div>
        </div>

        <div className="px-10 bg-white shadow-xl py-36 w-full flex flex-col max-h-screen">
          <div className="text-center">
            <h2 className="px-2 font-bold text-2xl">Contact Propert Manager</h2>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className=" py-2">
              Name:
            </label>
            <input
              className="w-full bg-white border border-slate-100 rounded-sm shadow-2xl"
              type="text"
            />
            <label className=" py-2" htmlFor="">
              Email
            </label>
            <input
              className="w-full bg-white border border-slate-100 rounded-sm shadow-2xl"
              type="Email"
            />

            <label className=" py-2" htmlFor="">
              Phone
            </label>
            <input
              className="w-full bg-white border  border-slate-100 rounded-sm shadow-2xl"
              type="text"
            />
            <label className=" py-2" htmlFor="">
              Message:
            </label>
            <input
              className="w-full bg-white border  border-slate-100 rounded-sm shadow-2xl"
              type="text"
            />
            <div className="my-20 mx-10">
              <button className="bg-blue-500 text-white px-5 py-3 rounded-xl shadow-md shadow-yellow-200">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDetail;
