import React, { useState } from "react";
import VehicleTable from "../tables/VehicleTable";
import CreateVehicleModal from "../modals/create/CreateVehicleModal";

export default function Vehicles() {
  const [createVehicleModal, setCreateVehicleModal] = useState(false);

  const handleVehicleCreate = () => {
    setCreateVehicleModal(true);
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
          createVehicleModal ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}>
        < CreateVehicleModal setCreateVehicleModal={setCreateVehicleModal} />
      </div>
    </div>
  );
}
