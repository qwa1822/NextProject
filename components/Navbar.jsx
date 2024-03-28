"use client";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";
import { MdViewSidebar } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  const [menuBar, setMenuBar] = useState(false);
  const [Profile, setProfile] = useState(false);

  const [providers, setProvider] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();

      setProvider(res);
    };

    setAuthProviders();
  }, []);

  console.log(providers);
  return (
    <>
      <nav>
        <div className=" flex flex-col md:flex-row   md:justify-between bg-blue-500 py-5">
          <div className="hidden w-full justify-center md:flex md:items-center">
            <Image
              src={logo}
              width={100}
              className="h-[50px]  object-contain"
              alt=""
            />

            <h2 className="text-2xl text-white">Properties</h2>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden items-center flex justify-center mb-2 md:mb-0  px-2 max-h-screen relative">
            <MdViewSidebar
              onClick={() => setMenuBar(prev => !prev)}
              className="text-2xl hover:bg-black hover:rounded-xl transition-all duration-500 text-white "
            />

            {menuBar && (
              <div className="flex-col    w-screen backdrop-blur-md bg-opacity-50 left-0 top-10 absolute  z-30 flex   gap-5  h-screen bg-black">
                <div>
                  <Link
                    href="/"
                    className={`  px-4 py-2 w-full  mb-5 border-b-slate-200 mt-5 border-b-2 text-white${
                      pathname === "/" ? "bg-black" : ""
                    }`}
                  >
                    Home
                  </Link>
                </div>

                <div>
                  <Link
                    href="/properties"
                    className={`  px-4 py-2 w-full  mb-5 border-b-slate-200 mt-5 border-b-2 text-white${
                      pathname === "/properties" ? "bg-black" : ""
                    }`}
                  >
                    properties
                  </Link>
                </div>

                <div>
                  {session && (
                    <Link
                      className={`  px-4 py-2 w-full  mb-5 border-b-slate-200 mt-5 border-b-2 text-white${
                        pathname === "/properties/add" ? "bg-black" : ""
                      }`}
                      href="/properties/add"
                    >
                      properties Add
                    </Link>
                  )}
                </div>

                <div className="px-4 py-2  w-full  mb-5  border-b-slate-200 border-b-2 text-white">
                  <span>Hello</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row w-full gap-3">
            <button
              className="
            hover:bg-black transition-all duration-500 text-white rounded-xl px-2"
            >
              <Link href="/">Home</Link>
            </button>
            <button
              className="
            hover:bg-black transition-all duration-500 text-white rounded-xl px-2"
            >
              <Link href="/properties">properties</Link>
            </button>

            <button
              className="
            hover:bg-black transition-all duration-500 text-white rounded-xl px-2"
            >
              <Link href="/properties/add">properties Add</Link>
            </button>
          </div>

          {/* Right Side Menu (logged In) */}

          <div className="flex justify-around  md:justify-start   md:flex-row space-y-5 mt-5 md:space-y-0 md:mt-0 w-full   gap-2 items-center">
            {!session &&
              Object.values(providers).map((item, idx) => (
                <button
                  onClick={() => signIn(item.id)}
                  key={idx}
                  className="bg-black mt-3 md:mt-0  flex items-center gap-2 text-white px-2 py-2 rounded-xl transition-all duration-500 hover:bg-slate-600"
                >
                  <FaGoogle />
                  Login on Register
                </button>
              ))}
            <div className="relative">
              <Image
                src={logo}
                alt=""
                className="h-[30px] object-contain"
                width={50}
              />

              <span className="absolute -top-3 bg-red-500 text-white px-2 rounded-xl right-0">
                1
              </span>
            </div>

            <div onClick={() => setProfile(prev => !prev)} className="relative">
              <Image
                src={profileDefault}
                alt=""
                width={50}
                className="h-[30px] object-contain"
              />
              {Profile && (
                <div className=" flex flex-col bg-black  text-white rounded-xl mt-4  px-20 rounded-r-md py-2 top-3 absolute right-2 ">
                  <div className="text-sm md:w-[100px] w-[80px] mb-2">
                    Your Profile
                  </div>
                  <div className="text-sm md:w-[100px] w-[80px] mb-2">
                    Your Profile
                  </div>
                  <div className="text-sm md:w-[100px] w-[80px] mb-2">
                    Your Profile
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
