import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from "material-react-table";
import ProductPopUp from "./ProductPop";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    product: "Code 8 Learners License ",
    price: "R1,400",
  },
  {
    product: "Code 8 Drivers License",
    price: "R2,300",
  },
  {
    product: "Code 10 Learners License",
    price: "R7,000",
  },
  {
    product: "Code 10 Drivers License ",
    price: "R7,000",
  },
  {
    product: "Code 14 Learners License",
    price: "R7,000",
  },
  {
    product: "Code 14 Drivers License",
    price: "R7,000",
  },
];

const ProductTable = () => {
  const [ProductPopup, setProductPopup] = useState(false);

  const handleProductPopUp = () => {
    setProductPopup(true);
    console.log("popup is Opened");
  };
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "product",
        header: "Product ",
        size: 500,
      },

      {
        accessorKey: "price",
        header: "Price",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        console.info(event, row.id, "Row has been clicked");
        handleProductPopUp();
      },
      sx: {
        cursor: "pointer", //you might want to change the cursor too when adding an onClick
      },
    }),
  });

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        table={table}
        enableRowActions
        onClick={handleProductPopUp}
        renderRowActionMenuItems={({ row, table }) => [
          <MRT_ActionMenuItem
            label="Edit"
            onClick={() => console.info("Edit")}
            table={table}
          />,
          <MRT_ActionMenuItem
            key="delete"
            label="Delete"
            onClick={() => console.info("Delete")}
            table={table}
          />,
        ]}
      />
      <div
        className={` ${
          ProductPopup ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}
      >
        {/* <ProductPopUp setProductPopup={setProductPopup} /> */}
      </div>
    </>
  );
};

export default ProductTable;
