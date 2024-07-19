import React, { useState } from "react";
import CreateDriver from "../modals/create/CreateDriverModal";
import DriverTable from "../tables/DriverTable";

export default function Transactions() {
  const [createPage, setCreatePage] = useState(false);

  const handleCreateTransaction = () => {
    setCreatePage(true);
  };

  return (
    <div className=" flex flex-col items-center w-full bg-gray-200 h-full rounded-tl-2xl ">
      <div className="flex w-[95%] m-[20px] justify-end">
        <button className="bg-green-500 p-2 rounded-2xl text-white text-md font-semibold" onClick={handleCreateTransaction}>
          Create Driver
        </button>
      </div>
      <div
        className={`${ createPage ? "absolute z-[100]" : "hidden"} top-[60px] left-[20%]`}>
        <CreateDriver setCreatePage={setCreatePage} />
      </div>
      <div className="w-[95%] rounded-lg">
        <DriverTable />
      </div>
    </div>
  );
}
