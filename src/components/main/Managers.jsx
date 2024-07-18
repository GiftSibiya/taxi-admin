import React, { useState } from "react";
import ManagersTable from "../tables/ManagersTable";
import CreateManagerModal from "../modals/create/CreateManagerModal";

export default function Managers() {
  const [createManagerModal, setCreateManagerModal] = useState(false);

  const handleStudentCreate = () => {
    setCreateManagerModal(true);
  };
  return (
    <div className="flex flex-col items-center bg-gray-200 h-full rounded-tl-2xl">
      <div className="flex w-[95%] m-5 justify-end">
        <button
          className="bg-green-500 p-2 rounded-2xl text-white text-sm"
          onClick={handleStudentCreate}>
          Add Manager
        </button>
      </div>
      <div className="w-[95%]">
        <ManagersTable  />
      </div>
      <div
        className={`${
          createManagerModal ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}
      >
        <CreateManagerModal setCreateManagerModal={setCreateManagerModal} />
      </div>
    </div>
  );
}
