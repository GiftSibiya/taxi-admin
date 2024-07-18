import React from "react";

export default function CreateManagerModal({ setCreateManagerModal }) {
  const handleManagerModal = () => {
    setCreateManagerModal(false);
    console.log("its closed");
  };
  return (
    <div className="flex flex-col items-center border-2 bg-white border-green-600 h-[500px] w-[1020px] rounded-2xl">
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center font-semibold justify-between m-2 w-[90%]">
          <h1 className="text-grey-800">Create New Student</h1>
          <button
            onClick={handleManagerModal}
            className="bg-red-500 w-[100px] text-white p-1 rounded-md">
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
                      placeholder="Name"
                      className="border-[1px] p-[3px] border-gray-800 rounded-md "
                    ></input>
                  </div>
                  {/* AGE */}
                  <div className="m-2 ">
                    <p className="font-semibold">Age</p>
                    <input
                      type="number"
                      placeholder=""
                      className="border-[1px] text-center p-[3px] w-[50px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  {/* -- */}
                </div>
                {/* -- */}
                {/* Enroll Date  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold">Phone Number</p>
                    <input
                      type="number"
                      placeholder="Phone No."
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
                    placeholder="Name"
                    className="border-[1px] p-[3px] border-gray-800 rounded-md "
                  ></input>
                </div>
                {/* -- */}
                {/* Enroll Date  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold">Gender</p>
                    <select className="border-[1px] p-[3px] w-[100px] rounded-md border-gray-800">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold"> Email</p>
                    <input
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
                    placeholder="Name"
                    className="border-[1px] w-[400px] p-[3px] rounded-md border-gray-800 "
                  ></input>
                </div>
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold">City</p>
                    <input
                      type="Date"
                      placeholder="Name"
                      className="border-[1px] p-[3px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold">Enroll Date</p>
                    <input
                      type="String"
                      placeholder="Name"
                      className="border-[1px] p-[3px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold">Zip</p>
                    <input
                      type="number"
                      placeholder=""
                      className="border-[1px] p-[3px] w-[60px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                </div>
              </div>
              {/* -- */}
            </div>
          </div>
          {/* DOCCMUNETAION */}
          <div className="ring h-[200px]">
            <h4 className="font-bold text-lg">Documentation</h4>
            <div className="flex justify-between ">
              {/* NAME AND DATE */}
              <div className="h-[175px] bg-gray-100 rounded-md m-[2px]">
                {/* Full Name  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold"> License Type</p>
                    <select
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[120px] border-gray-800 rounded-md "
                    >
                      <option value="Code8">Code 8</option>
                      <option value="Code8">Code 8 PrDP</option>
                      <option value="Code8">Code 10</option>
                      <option value="Code8">Code 10 PrDP</option>
                      <option value="Code8">Code 14</option>
                      <option value="Code8">Code 14 PrDP</option>
                    </select>
                  </div>
                  {/* AGE */}
                  <div className="m-2 ">
                    <p className="font-semibold">Code</p>
                    <select
                      type="string"
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[60px] rounded-md border-gray-800 "
                    >
                      <option value={"A"}>A</option>
                      <option value={"A1"}>A1</option>
                      <option value={"B"}>B</option>
                      <option value={"C1"}>C1</option>
                      <option value={"C"}>C</option>
                      <option value={"EB"}>EB</option>
                      <option value={"EC1"}>EC1</option>
                      <option value={"EC"}>EC</option>
                    </select>
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
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[120px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold">PrDP Category</p>
                    <select
                      type="string"
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[180px] rounded-md border-gray-800 "
                    >
                      <option value="P">P- Passengers</option>
                      <option value="G">G- Goods</option>
                      <option value="D">D- Dangerous Goods</option>
                    </select>
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
                    placeholder="Name"
                    className="border-[1px] p-[3px] border-gray-800 rounded-md "
                  ></input>
                </div>
                {/* -- */}
                {/* Enroll Date  */}
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold"> Vehicel Restrictions</p>
                    <select
                      type="email"
                      placeholder="Name"
                      className="border-[1px] p-[3px] border-gray-800 rounded-md "
                    >
                      <option value={"None"}>0-None</option>
                      <option value={"1-Automatic"}>1-Automatic</option>
                      <option value={"2-Electrically Powered"}>
                        2-Electrically Powered
                      </option>
                      <option value={"3-Physically disabled"}>
                        3-Physically disabled
                      </option>
                      <option value={"4-Bus > 16000kg (GVM) permitted"}>
                        4-Bus &gt; 16000kg (GVM) permitted
                      </option>
                    </select>
                  </div>
                </div>
                {/* -- */}
              </div>
              {/* -- */}
              {/* ADDRRESS LINES */}
              <div className=" bg-gray-100 rounded-md h-[175px] m-[2px]">
                <div className="m-2 ">
                  <p className="font-semibold">Driver restrictions</p>
                  <select
                    type="String"
                    placeholder="Name"
                    className="border-[1px] w-[150px] p-[3px] rounded-md border-gray-800 "
                  >
                    <option value="None">None</option>
                    <option value="Glasses">Glasses</option>
                    <option value="Artificial Limb">Artificial Limb</option>
                  </select>
                </div>
                <div className="flex">
                  <div className="m-2 ">
                    <p className="font-semibold">Lessons</p>
                    <input
                      type="number"
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[70px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold">Account Status</p>
                    <input
                      type="String"
                      placeholder="Name"
                      className="border-[1px] p-[3px] rounded-md border-gray-800 "
                    ></input>
                  </div>
                  <div className="m-2 ">
                    <p className="font-semibold">Balance</p>
                    <input
                      type="number"
                      placeholder="Name"
                      className="border-[1px] p-[3px] w-[60px] text-green-700 font-bold rounded-md border-gray-800 "
                    ></input>
                  </div>
                </div>
              </div>
              {/* -- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
