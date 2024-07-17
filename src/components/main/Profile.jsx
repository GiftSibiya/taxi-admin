import React from "react";

export default function Profile() {
  return <div className="bg-gray-200 flex items-center justify-center h-full rounded-tl-2xl">
    <div className="border-2 flex justify-center w-[95%] h-full m-2">
      <div className="w-[90%] rounded-3xl h-[40%] flex-col bg-slate-300 mt-[20px]">

        <div className="flex flex-row justify-between m-[20px]">
          <div className="text-2xl">Profile Details</div>
          <div className="bg-green-400 p-2 rounded-xl text-white cursor-pointer"> Edit Profile</div>
          <div className="text-lg">17 - July - 2024</div>
        </div>

        <div className="flex flex-row items-center justify-between mx-[30px]">
          <div className="border-2 rounded-full border-black w-[150px] h-[150px]"></div>
          <div className="flex-col  w-[85%] h-[150px]">
            <div className="text-2xl">Natasha Dlamini</div>
            <div className="flex flex-row justify-between w-[80%]">
              <div className=" m-2 p-2 w-[200px] h-[80px] cursor-pointer rounded-2xl">
                <div className="">Position</div>
                <div className="text-xl font-semibold">Chairman</div>
              </div>
              <div className=" m-2 p-2 w-[200px] h-[80px] cursor-pointer rounded-2xl">
                <div className="">Phone Number</div>
                <div className="text-xl font-semibold">012 345 6789</div>
              </div>
              <div className=" m-2 p-2 w-[200px] h-[80px] cursor-pointer rounded-2xl">
                <div className="">Email Adress</div>
                <div className="text-xl font-semibold">NatashaDlamini123@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
        <div className="flex flex-row justify-between m-[30px]">
              <div className="bg-slate-200 m-2 p-2 w-[200px] h-[80px] cursor-pointer rounded-2xl">
                <div className="">Drivers</div>
                <div className="text-xl font-semibold">16 Active Drivers</div>
              </div>
              <div className="bg-slate-200 m-2 p-2 w-[200px] h-[80px] cursor-pointer rounded-2xl">
                <div className="">Active Fleet</div>
                <div className="text-xl font-semibold">17</div>
              </div>
              <div className="bg-slate-200 m-2 p-2 w-[200px] h-[80px] cursor-pointer rounded-2xl">
                <div className="">Routes</div>
                <div className="text-xl font-semibold">23 Active Routes</div>
              </div>
              <div className="bg-slate-200 m-2 p-2 w-[200px] h-[80px] cursor-pointer rounded-2xl">
                <div className="">Position</div>
                <div className="text-xl font-semibold">Super Admin</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>;
}
