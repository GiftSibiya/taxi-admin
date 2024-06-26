import React, { useState } from "react";

//React Icons
import { LuMenu } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import NavDotMenu from "./navBar/NavDotMenu";

export default function NavBar() {
// Hooks
const [navMenu, setHamMenu] = useState(false)

  // Variuables
  const navigate = useNavigate();

  // Functions

  const handleProfileView = () => {
    navigate("/Profile");
  };

  const handleMenuClick = () => {
    setHamMenu(!navMenu)
    console.log(navMenu)
  };

  return (
    <div className="flex justify-between items-center h-[50px] w-[100%]  ">
      <div className="flex items-center">
        {/* Hamburger */}
        <div className="mx-2">
          <LuMenu size={25} />
        </div>
        {/* -- */}
        {/* Search Bar */}
        <div className="flex items-center px-2 rounded-md h-[30px]">
          <input
            className="border-[1px] m-1 p-1 border-green-300 rounded-lg h-[30px] focus:border-green-400"
            placeholder="Search"
          />
          <div className="bg-white p-1 rounded-lg">
            <LuSearch size={20} />
          </div>
        </div>
        {/* -- */}
      </div>
      <div className="flex items-center mr-[20px]">
        <div className="border-[1px] w-[50px] border-gray-800 p-1 rounded-lg">
          <LuMoonStar size={20} />
        </div>
        <div className="flex items-center justify-between px-[20px] mx-[20px] rounded-lg p-[2px] bg-white w-[250px]">
          <div className=" flex items-center justify-center size-[40px] border-[1px] border-gray-800 rounded-md ">
            <LuUser size={30} />
          </div>
          <div className="flex flex-col items-center ">
            <text className="text-md font-semibold">User Name</text>
            <text
              className="text-xs text-blue-700 cursor-pointer"
              onClick={handleProfileView}
            >
              View Profile
            </text>
          </div>
          <div className="cursor-pointer" onClick={handleMenuClick}>
            <CiMenuKebab  size={25} />
            <div className= {navMenu? "absolute z-[100]" : "hidden"} >
              
            <NavDotMenu className="z-[101]" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
