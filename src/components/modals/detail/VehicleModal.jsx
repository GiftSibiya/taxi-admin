import React from "react";

// Images
import quantum1 from "../../../assets/images/quantum1.jpg"

export default function VehicleModal({ setVehicleModal, selectedRow }) {
  const handleVehicleModalClose = () => {
    setVehicleModal(false);
    console.log("its closed");
  };
  return (
    <div className="flex flex-col items-center border-2 bg-white border-green-600 h-[500px] w-[1020px] rounded-2xl">
      <div className="flex flex-col justify-center w-full">
        <h1 className="text-grey-800 m-2 text-2xl font-light">Vehicle Information</h1>

        <div className="flex flex-row items-center justify-around bg-slate-300 h-[320px] rounded-lg m-2 w-[95%] p-2">
          <div className="h-[280px] w-[380px] rounded-3xl overflow-hidden ">
            <img src={quantum1} alt="Selected Taxi" className="object-cover" />
          </div>
          <div className="flex flex-col items-center text-2xl font-semibold w-[550px] h-[280px]">
            <div className="flex flex-row items-center justify-between w-[500px]">
              <p className="w-[300px]">{selectedRow?.detail}</p>
              <div className="flex items-center font-semibold justify-between m-2">
                <button
                  onClick={handleVehicleModalClose}
                  className="bg-red-500 w-[100px] text-white p-1 rounded-md">
                  Close
                </button>
              </div>
            </div>
            <div className="flex flex-col w-[90%] h-[80px]">
              <div className="flex justify-between w-full">

                <div className="flex-col items-center w-[120px] justify-center m-2">
                  <p className="text-sm text-center"> Registration</p>
                  <input
                    value={selectedRow?.plate_number}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[120px] text-center "></input>
                </div>

                <div className="flex-col items-center w-[200px] justify-center  m-2">
                  <p className="text-sm text-center"> VIN Number</p>
                  <input
                    value={selectedRow?.vin}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[200px] text-center "></input>
                </div>
                <div className="flex-col items-center w-[120px] justify-center  m-2">
                  <p className="text-sm text-center"> Driver</p>
                  <input
                    value={selectedRow?.driver}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[120px] text-center "></input>
                </div>

              </div>
              <div className="flex flex-row justify-between w-full">

                <div className="flex-col items-center w-[120px] justify-center m-2">
                  <p className="text-sm text-center">Routes</p>
                  <input
                    value={selectedRow?.route}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[120px] text-center "></input>
                </div>

                <div className="flex-col items-center w-[120px] justify-center  m-2">
                  <p className="text-sm text-center">Fuel</p>
                  <input
                    value={selectedRow?.fuel}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[120px] text-center "></input>
                </div>
                <div className="flex-col items-center w-[120px] justify-center  m-2">
                  <p className="text-sm text-center"> Milage</p>
                  <input
                    value={selectedRow?.km}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[120px] text-center "></input>
                </div>
                <div className="flex-col items-center w-[120px] justify-center  m-2">
                  <p className="text-sm text-center">Seats</p>
                  <input
                    value={selectedRow?.seats}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[80px] text-center "></input>
                </div>
                
              </div>
              <div className="flex flex-row justify-between w-full">

                <div className="flex-col items-center w-[100px] justify-center m-2">
                  <p className="text-sm text-center">Date Added</p>
                  <input
                    value={selectedRow?.enrol_date}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[100px] text-center "></input>
                </div>

                <div className="flex-col items-center w-[110px] justify-center  m-2">
                  <p className="text-sm text-center">Last Service Date</p>
                  <input
                    value={selectedRow?.service.last_service_date}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[110px] text-center "></input>
                </div>
                <div className="flex-col items-center w-[110px] justify-center  m-2">
                  <p className="text-sm text-center"> Last Service KM</p>
                  <input
                    value={selectedRow?.service.last_service_km}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[110px] text-center "></input>
                </div>
                <div className="flex-col items-center w-[120px] justify-center  m-2">
                  <p className="text-sm text-center">Next Service KM</p>
                  <input
                    value={selectedRow?.service.next_service_km}
                    placeholder="Name"
                    className="border-[1px] text-sm border-gray-800 rounded-md w-[120px] text-center "></input>
                </div>

              </div>
            </div>
          </div>
        </div>

       
        <div className=" flex flex-col justify-between h-[420px]">
        </div>
      </div>
    </div>
  );
}
