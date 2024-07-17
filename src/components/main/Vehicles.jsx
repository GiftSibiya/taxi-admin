import React, { useState } from "react";
import CreateStudentPop from "../students/CreateStudentPop";
import VehicleTable from "../students/VehicleTable";

export default function Vehicles() {
  const [vehicleCreatePop, setVehiclePopup] = useState(false);

  const handleVehicleCreate = () => {
    setVehiclePopup(true);
  };
  return (
    <div className="flex flex-col items-center bg-gray-200 h-full rounded-tl-2xl">
      <div className="flex w-[95%] m-5 justify-end">
        <button
          className="bg-green-500 py-2 px-4 rounded-2xl text-white text-sm font-semibold"
          onClick={handleVehicleCreate}>
          Add Vehicle
        </button>
      </div>
      <div className="w-[95%]">
        <VehicleTable />
      </div>
      <div
        className={`${
          vehicleCreatePop ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}>
        <CreateStudentPop setStudentCreate={setVehiclePopup} />
      </div>
    </div>
  );
}
