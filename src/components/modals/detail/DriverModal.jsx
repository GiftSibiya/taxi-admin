import React from "react";

export default function DriverModal({ setDriverModal, selectedRow }) {
  const handleDriverModalClose = () => {
    setDriverModal(false);
    console.log(selectedRow);
  };
  return (
    <div className="flex flex-col items-center border-2 bg-white border-green-600 h-[500px] w-[1020px] rounded-2xl">
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center font-semibold justify-between m-2 w-[90%]">
          <h1 className="text-grey-800">Driver Information</h1>
          <button
            onClick={handleDriverModalClose}
            className="bg-red-500 w-[100px] text-white p-1 rounded-md"
          >
            Close
          </button>
        </div>
        <div className=" flex flex-col justify-between h-[420px]">
          <div className="flex flex-col h-[200px]">
            <h2>Personal Information</h2>
            <div className="flex justify-between ">
              {/* NAME AND DATE */}
              <div className="h-[175px] bg-gray-100 rounded-md m-[2px]">
                {/* Full Name  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold"> Full Name</p>
                    <input
                      value={selectedRow?.fullName}
                      placeholder="Name"
                      className="border-[1px] p-[3px] border-gray-800 rounded-md "
                    ></input>
                  </div>
                  {/* AGE */}
                  <div className="m-2 ">
                    <p className="font-semibold">Age</p>
                    <input
                      type="number"
                      value={selectedRow?.age}
                      placeholder="Name"
                      className="border-[1px] text-center p-[3px] w-[50px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  {/* -- */}
                </div>
                {/* -- */}
                {/* Enroll Date  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold">Enroll Date</p>
                    <input
                      type="Date"
                      value={selectedRow?.date}
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[120px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold">Phone Number</p>
                    <input
                      type="number"
                      value= {selectedRow?.phone}
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[120px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                </div>
                {/* -- */}
              </div>
              <div className="bg-gray-100 rounded-md h-[175px] m-[2px]">
                {/* ID Number  */}
                <div className="m-2 ">
                  <p className="font-semibold"> ID Number</p>
                  <input
                    type="number"
                    value={selectedRow?.id_num}
                    placeholder="Name"
                    className="border-[1px] p-[3px] border-gray-800 rounded-md "
                  ></input>
                </div>
                {/* -- */}
                {/* Enroll Date  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold">Gender</p>
                    <input
                      type="String"
                      value={selectedRow?.gender}
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[60px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold"> Email</p>
                    <input
                      value={selectedRow?.email}
                      type="email"
                      placeholder="Name"
                      className="border-[1px] p-[3px] border-gray-800 rounded-md "
                    ></input>
                  </div>
                </div>
                {/* -- */}
              </div>
              {/* -- */}
              {/* ADDRRESS LINES */}
              <div className=" bg-gray-100 rounded-md h-[175px] m-[2px]">
                <div className="m-2 ">
                  <p className="font-semibold">Street Address</p>
                  <input
                    type="String"
                    value={selectedRow?.address.street}
                    placeholder="Name"
                    className="border-[1px] w-[400px] p-[3px] rounded-md border-gray-800 "
                  ></input>
                </div>
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold">City</p>
                    <input
                      type="text"
                      value={selectedRow?.address.city}
                      placeholder="Name"
                      className="border-[1px] p-[3px]  rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold">Zip</p>
                    <input
                      type="number"
                      value={selectedRow?.address.zip}
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[60px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                </div>
              </div>
              {/* -- */}
            </div>
          </div>
          {/* DOCCMUNETAION */}
          <div className="h-[200px]">
            <h4 className="font-bold text-lg">Documentation</h4>
            <div className="flex justify-between ">
              {/* NAME AND DATE */}
              <div className="h-[175px] flex-1 bg-gray-100 rounded-md m-[2px]">
                {/* Full Name  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold"> License Type</p>
                    <input
                      value={"Code 10 PrDP"}
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[120px] border-gray-800 rounded-md "
                    ></input>
                  </div>
                  {/* AGE */}
                  <div className="m-2 ">
                    <p className="font-semibold">Status</p>
                    <input
                      type="string"
                      value="Learners"
                      placeholder="Name"
                      className="border-[1px] text-center p-[3px] w-[100px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  {/* -- */}
                </div>
                {/* -- */}
                {/* Enroll Date  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold">Expiry Date</p>
                    <input
                      type="Date"
                      value={selectedRow?.license.expiry}
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[120px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold">PrDP Category</p>
                    <input
                      type="string"
                      value="G, P"
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[120px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                </div>
                {/* -- */}
              </div>
              <div className="bg-gray-100 flex-1 rounded-md h-[175px] m-[2px]">
                <div className="flex flex-col">
                  <div className="m-2 ">
                    <p className="font-semibold">Code</p>
                    <input
                      type="string"
                      value={selectedRow?.license.code}
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[60px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold"> Vehicel Restrictions</p>
                    <input
                      value={"None"}
                      type="email"
                      placeholder="Name"
                      className="border-[1px] p-[3px] border-gray-800 rounded-md "
                    ></input>
                  </div>
                </div>
                {/* -- */}
              </div>
              {/* -- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
