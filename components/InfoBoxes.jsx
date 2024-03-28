import React from "react";

const InfoBoxes = () => {
  return (
    <div className="container-xl px-2 py-2 grid grid-cols-1 md:flex md:justify-center flex-wrap gap-5  font-serif bg-white min-h-full   ">
      <div className="w-full md:w-1/3    flex flex-col  my-2 px-3  py-10 rounded-xl bg-slate-300">
        <div className="">
          <h2 className="text-2xl font-bold">For Renters</h2>
        </div>
        <div>
          <span className="text-sm leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            ut veniam recusandae eos dolore possimus aliquid minima quaerat?
            Voluptatibus laboriosam iure veritatis quo aliquid facilis officiis
            commodi est, repellendus non?
          </span>
        </div>
        <button className="bg-black  mx-auto w-1/2  mt-5 text-white px-2 py-2 rounded-xl">
          Broswe Properties
        </button>
      </div>

      <div className="w-full  md:w-1/3 flex flex-col     my-2 px-3 py-10 rounded-xl bg-blue-300">
        <div className="">
          <h2 className="text-2xl font-bold">For Renters</h2>
        </div>
        <div>
          <span className="text-sm leading-7 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            ut veniam recusandae eos dolore possimus aliquid minima quaerat?
            Voluptatibus laboriosam iure veritatis quo aliquid facilis officiis
            commodi est, repellendus non?
          </span>
        </div>
        <button className="bg-blue-500 mt-5 text-white mx-auto w-1/2  px-2 py-4 rounded-xl">
          Add Properties
        </button>
      </div>
    </div>
  );
};

export default InfoBoxes;
