import React from "react";

const Loading = () => {
  return (
    <div className="max-w-5xl  min-h-screen mx-auto">
      <div className="container min-h-screen  py-20 px-10 rounded-xl shadow-xl bg-white">
        <div className="flex justify-center flex-col space-y-5 md:space-y-0">
          <h2 className="font-bol text-white text-2xl">Loading...</h2>

          <span className="text-xl font-bold">Occured....</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
