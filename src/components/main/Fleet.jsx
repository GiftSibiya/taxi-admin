import React from "react";

export default function Fleet() {
  return <div className="bg-gray-200 flex justify-center h-full rounded-tl-2xl"> 
    <div className="flex flex-row p-2 m-[100px] justify-around w-[90%]">
      <div className="ring flex flex-col items-center h-[500px] w-[500px] p-2 rounded-3xl">
        <div className="text-3xl mt-2">Vehicles</div>
        <div className="w-[90%] mt-[50px] ">
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4 rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Total</div>
            <div className="text-2xl text-blue-700 font-semibold">129</div>
          </div>
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4  rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Available</div>
            <div className="text-2xl text-green-700 font-semibold ">101</div>
          </div>
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4  rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Out Of Service</div>
            <div className="text-2xl text-red-700 font-semibold">28</div>
          </div>
        </div>
      </div>
      <div className="ring flex flex-col items-center h-[500px] w-[500px] p-2 rounded-3xl">
        <div className="text-3xl mt-2">Drivers</div>
        <div className="w-[90%] mt-[50px] ">
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4 rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Total</div>
            <div className="text-2xl text-blue-700 font-semibold">89</div>
          </div>
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4  rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Active</div>
            <div className="text-2xl text-green-700 font-semibold ">74</div>
          </div>
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4  rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Not Working</div>
            <div className="text-2xl text-red-700 font-semibold">15</div>
          </div>
        </div>
      </div>
      <div className="ring flex flex-col items-center h-[500px] w-[500px] p-2 rounded-3xl">
        <div className="text-3xl mt-2">Trips</div>
        <div className="w-[90%] mt-[50px] ">
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4 rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Total</div>
            <div className="text-2xl text-blue-700 font-semibold">234</div>
          </div>
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4  rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Active</div>
            <div className="text-2xl text-green-700 font-semibold ">101</div>
          </div>
          <div className="flex flex-row justify-between px-[40px] bg-slate-100 h-[80px] my-4  rounded-2xl items-center cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
            <div className="text-2xl">Cancelled</div>
            <div className="text-2xl text-red-700 font-semibold">33</div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
