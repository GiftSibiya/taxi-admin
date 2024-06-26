import React, { useState } from "react";
import CreateProduct from "../products/CreateProductPop";
import ProductTable from "../products/ProductTable";

export default function Products() {
  const [productCreate, setProductCreate] = useState(false);

  const handleCreateProduct = () => {
    setProductCreate(true);
  };

  return (
    <div className=" flex flex-col items-center w-full bg-gray-200 h-full rounded-tl-2xl ">
      <div className="flex ring-1 w-[95%] m-2 justify-end">
        <button
          className="bg-green-500 p-2 rounded-2xl text-white text-sm"
          onClick={handleCreateProduct}
        >
          Create Product
        </button>
      </div>
      <div
        className={`${
          productCreate ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}
      >
        <CreateProduct setProductCreate={setProductCreate} />
      </div>
      <div className="w-[95%] rounded-lg">
        <ProductTable />
      </div>
    </div>
  );
}
