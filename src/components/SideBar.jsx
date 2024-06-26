import React from "react";
import { Link } from "react-router-dom";

// Icons Imports
import { LuFileText } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuHelpCircle } from "react-icons/lu";
import { LuCalendarSearch } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import SidebarItem from "./utils/SidebarItem";
import { PiGarage } from "react-icons/pi";
import { LuRepeat2 } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";

export default function SideBar() {
  return (
    <div className=" flex justify-center h-screen w-[250px] ">
      <div className="flex flex-col justify-between my-[20px] items-center w-full">
        {/* Main Content */}
        <div className="flex flex-col items-center  w-full">
          {/* Branding */}
          <div className="border-[1px] bg-gray-200 rounded-3xl w-[80%]  h-[100px]"></div>
          {/* -- */}
          <div className="flex flex-col items-center w-[100%]">
            <hr className="w-[80%] my-2 border-white" />
            {/* Links */}
            <div className="flex flex-col w-[80%] mt-[20px]">
              <SidebarItem
                title={"DashBoard"}
                path={"/Dash"}
                icon={<LuFileText size={25} />}
              />
              <SidebarItem
                title={"Transactions"}
                path={"/Transactions"}
                icon={<LuRepeat2 size={25} />}
              />
              <SidebarItem
                title={"Products"}
                path={"/Products"}
                icon={<LuShoppingBag size={25} />}
              />
              <SidebarItem
                title={"Students"}
                path={"/Students"}
                icon={<LuUsers size={25} />}
              />
              <SidebarItem
                title={"Schedule"}
                path={"/Schedule"}
                icon={<LuCalendarSearch size={25} />}
              />
              <SidebarItem
                title={"Team"}
                path={"/Team"}
                icon={<LuClipboardList size={25} />}
              />
              <SidebarItem
                title={"fleet"}
                path={"/Fleet"}
                icon={<PiGarage size={25} />}
              />
            </div>
          </div>
        </div>
        {/* System */}
        <div className=" w-[80%]">
          <hr className="w-[80%] my-2 border-white" />
          <SidebarItem
            title={"Settings"}
            path={"/Settings"}
            icon={<LuSettings size={25} />}
          />

          <SidebarItem
            title={"Help"}
            path={"/Help"}
            icon={<LuHelpCircle size={25} />}
          />
        </div>
      </div>
    </div>
  );
}
