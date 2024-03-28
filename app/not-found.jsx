import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen">
      <div className="container py-18 px-5 bg-white  shadow-2xl   flex flex-col items-center rounded-xl   my-10">
        <div>
          <h2 className="text-3xl font-bold text-black text-center py-5">
            Error Occcured
          </h2>
        </div>
        <div className="py-10">
          <span className="text-black font-bold text-xl py-5">
            에러가 발생했습니다
          </span>
        </div>

        <div className="py-5">
          <Link href="/">
            <button className="bg-blue-300 rounded-xl  hover:scale-105 hover:bg-black transition-all duration-500  text-white px-3 py-5">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
