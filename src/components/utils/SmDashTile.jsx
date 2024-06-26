import React from "react";
import { LuMoreHorizontal } from "react-icons/lu";

export default function SmDashTile({ title, icon, figure, percentage }) {
  return (
    <section className="flex items-center justify-center h-[100px] w-[200px] rounded-2xl m-2 bg-white">
      <div className="flex flex-col w-[90%] h-[90%]">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <h4 className="font-bold">{title}</h4>
            <vr className="h-[10px] w-[1px] mx-[5px] bg-green-500" />
            <p className="text-gray-600 text-sm">Today</p>
          </div>
          <div className="cursor-pointer">
            <LuMoreHorizontal />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="">{icon}</div>
          <div className="flex flex-col ml-[20px]">
            <p className="text-lg font-bold">R {figure}</p>
            <div className="flex items-center">
              <p className="text-green-500 font-bold text-xs">{percentage}</p>
              <vr className="h-[10px] w-[1px] mx-[5px] bg-green-500" />
              <p className="text-sm"> Increase </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
