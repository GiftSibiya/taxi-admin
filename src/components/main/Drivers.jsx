import React, { useState } from "react";
import CreateTransaction from "../transactions/CreateTransaction";
import TransactionTable from "../transactions/TransactionTable";

export default function Transactions() {
  const [createPage, setCreatePage] = useState(false);

  const handleCreateTransaction = () => {
    setCreatePage(true);
  };

  return (
    <div className=" flex flex-col items-center w-full bg-gray-200 h-full rounded-tl-2xl ">
      <div className="flex ring-1 w-[95%] m-2 justify-end">
        <button
          className="bg-green-500 p-2 rounded-2xl text-white text-sm"
          onClick={handleCreateTransaction}
        >
          \ Create transaction
        </button>
      </div>
      <div
        className={`${
          createPage ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}
      >
        <CreateTransaction setCreatePage={setCreatePage} />
      </div>
      <div className="w-[95%] rounded-lg">
        <TransactionTable />
      </div>
    </div>
  );
}
