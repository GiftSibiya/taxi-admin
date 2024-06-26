// Imports
import React from "react";
import { useNavigate } from "react-router-dom";


function NavDotMenu() {
    // variables 
    const navigate = useNavigate();
    
    // Functions
    const handleLogOut = () => {
        navigate("/")
    };

  return (
    <div className="absolute flex justify-center bg-green-500 top-[20px] right-[-20px] w-[150px] rounded-lg px-[10px] z-[150]">
      <div className="p-2">
        <div className="cursor-pointer text-white font-semibold my-1">Dark Theme</div>
        <div className="cursor-pointer text-white font-semibold my-1">Settings</div>
        <div className="cursor-pointer text-white font-semibold my-1" onClick={handleLogOut}>Log Out</div>
      </div>
    </div>
  );
}

export default NavDotMenu;
