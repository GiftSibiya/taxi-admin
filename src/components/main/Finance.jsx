import React, { useState } from "react";

export default function Finance() {
  const [productCreate, setProductCreate] = useState(false);

  const handleCreateProduct = () => {
    setProductCreate(true);
  };

  return (
    <div className=" flex flex-col items-center w-full bg-gray-200 h-full rounded-tl-2xl ">
      <div className="flex flex-row mt-10 w-[95%] justify-between">
         <div className="ring flex flex-col items-center h-[300px] w-[400px] p-2 rounded-3xl">
          <div className="text-3xl mt-2 w-[90%]">balance</div>
          <div className="flex flex-col items-start w-[90%] mt-[50px] ">
            <div className="flex flex-row justify-between px-[40px] h-[80px] my-4  rounded-2xl items-start cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
              <div className="w-[100%]  text-[40px] font-semibold">R423, 521.68</div>
            </div>
            <div className="flex flex-row items-center justify-around w-[60%]">
              <div className="bg-green-500 flex items-center justify-center w-[60px] h-[40px] rounded-lg text-center text-white ">+14%</div>
              <div className="">from last month</div>
            </div>
          </div>
        </div>
         <div className="ring flex flex-col items-center h-[300px] w-[400px] p-2 rounded-3xl">
          <div className="text-3xl mt-2 w-[90%]">Income</div>
          <div className="flex flex-col items-start w-[90%] mt-[50px] ">
            <div className="flex flex-row justify-between px-[40px] h-[80px] my-4  rounded-2xl items-start cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
              <div className="w-[100%]  text-[40px] font-semibold">R423, 521.68</div>
            </div>
            <div className="flex flex-row items-center justify-around w-[60%]">
              <div className="bg-green-500 flex items-center justify-center w-[60px] h-[40px] rounded-lg text-center text-white ">+14%</div>
              <div className="">from last month</div>
            </div>
          </div>
        </div>
         <div className="ring flex flex-col items-center h-[300px] w-[400px] p-2 rounded-3xl">
          <div className="text-3xl mt-2 w-[90%]">Expense</div>
          <div className="flex flex-col items-start w-[90%] mt-[50px] ">
            <div className="flex flex-row justify-between px-[40px] h-[80px] my-4  rounded-2xl items-start cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
              <div className="w-[100%]  text-[40px] font-semibold">R423, 521.68</div>
            </div>
            <div className="flex flex-row items-center justify-around w-[60%]">
              <div className="bg-green-500 flex items-center justify-center w-[60px] h-[40px] rounded-lg text-center text-white ">+14%</div>
              <div className="">from last month</div>
            </div>
          </div>
        </div>
         <div className="ring flex flex-col items-center h-[300px] w-[400px] p-2 rounded-3xl">
          <div className="text-3xl mt-2 w-[90%]">Savings</div>
          <div className="flex flex-col items-start w-[90%] mt-[50px] ">
            <div className="flex flex-row justify-between px-[40px] h-[80px] my-4  rounded-2xl items-start cursor-pointer hover:border-2 hover:border-slate-900 duration-150">
              <div className="w-[100%]  text-[40px] font-semibold">R423, 521.68</div>
            </div>
            <div className="flex flex-row items-center justify-around w-[60%]">
              <div className="bg-green-500 flex items-center justify-center w-[60px] h-[40px] rounded-lg text-center text-white ">+14%</div>
              <div className="">from last month</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[100%] p-10">
        <div className="flex items-start justify-center p-2 w-[35%] h-[550px] bg-slate-100 rounded-[50px]">
          <div className="flex flex-col w-full">
            <div className=" flex flex-row items-center w-[100%] px-[40px] ">
              <div className="flex flex-col w-[90%] ">
                <div className="text-2xl font-semibold">Recent Activity</div>
                <div className="">Recent Payment Activity</div>
              </div>
              <div className="font-semibold cursor-pointer w-[150px] border-[1px] border-black p-2 rounded-3xl justify-center hover:bg-slate-500 hover:text-white duration-100 hover:border-0">
                See All &gt;&gt;&gt;
              </div>
            </div>
            <hr className="border-2 w-full mt-2"/>
          </div>
        </div>
        <div className="flex items-start justify-center p-2 w-[60%] h-[550px] bg-slate-100 rounded-[50px]">
        </div>
      </div>
    </div>
  );
}
