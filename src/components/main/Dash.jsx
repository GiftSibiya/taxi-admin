import React from "react";
import SmDashTile from "../utils/SmDashTile";
import { LuShoppingCart } from "react-icons/lu";
import { BsCashCoin } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import MainChart from "../dash/MainChart";
import EventTile from "../utils/EventTile";


export default function Dash() {
  return (
    <div className=" flex flex-col items-center w-full bg-gray-200 h-full rounded-tl-2xl ">
      <div className="flex flex-col h-full w-[95%]  ">
        <div className="w-full h-[50px] mt-[10px]">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex justify-between h-full ">
          {/* First Section */}
          <div className=" w-[60%] ">
            <div className="flex flex-row justify-around w-[100%] ">
              <SmDashTile title={"Enrollment"} icon={<LuShoppingCart size={30} />} figure={"750"} percentage={"10%"} />
              <SmDashTile title={"Revenue"} icon={<BsCashCoin size={30} />} figure={"R16,240"} percentage={"25%"} />
              <SmDashTile title={"Students"} icon={<LuUsers2 size={30} />} figure={"250"} percentage={"5%"} />
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[70%] ">
              <div className="flex justify-center  h-[90%] w-[90%] ">
                  <MainChart />
                </div>
              </div>
          </div>
          <div className="w-[38%] ">
            <div className="bg-slate-50 flex flex-col items-center p-5 h-[730px] rounded-[30px]">
            <div className="text-2xl my-2">Schedule</div>
            <div className="text-2xl my-2">{new Date().toLocaleDateString()}</div>

             <div className="bg-slate-200 w-[90%] rounded-[20px] mt-[30px] h-[530px] overflow-scroll">
                <EventTile date={"24-July-2024"} time={"09:00"} name={"Meeting With Rank Managers"} location={"Johannesburg"} />
                <EventTile date={"27-July-2024"} time={"10:00"} name={"Meeting With Rank Managers"} location={"Midrand"} />
                <EventTile date={"2-July-2024"} time={"12:00"} name={"Meeting With Rank Managers"} location={"Alexandra"}/>
                <EventTile date={"6-July-2024"} time={"09:00"} name={"Meeting With Rank Managers"} location={"Johannesburg"}/>
                <EventTile date={"6-July-2024"} time={"10:00"} name={"Meeting With Rank Managers"} location={"Pretoria"}/>
                <EventTile date={"8-July-2024"} time={"09:00"} name={"Meeting With Rank Managers"} location={"Johannesburg"}/>
             </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
