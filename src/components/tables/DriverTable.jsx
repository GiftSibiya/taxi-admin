import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from "material-react-table";
import DriverModal from "../modals/detail/DriverModal";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    fullName: "John Doe ",
    address: "261 Erdman Ford",
    license: "Code 10 PrDP",
    date: "12/12/2023",
    amount: 2300,
  },
  {
    fullName: "Jane Doe",
    address: "769 Dominic Grove",
    license: "Code 10",
    date: "10/12/2023",
    amount: 2300,
  },
  {
    fullName: "Joe Doe",
    address: "566 Brakus Inlet",
    license: "Code 10 PrDP",
    date: "10/10/2023",
    amount: 2300,
  },
  {
    fullName: "Kevin Vandy ",
    address: "722 Emie Stream",
    license: "Code 8 ",
    date: "05/12/2023",
    amount: 2300,
  },
  {
    fullName: "Joshua Rolluffs",
    address: "32188 Larkin Turnpike",
    license: "Code 10 ",
    date: "01/12/2023",
    amount: 2300,
  },
];

const DriverTable = () => {
  const [driverModal, setDriverModal] = useState(false)
  
  const handleDriverModal = () => {
    setDriverModal(true)
  }
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "Date",
        size: 100,
      },

      {
        accessorKey: "fullName",
        header: "Full Name",
        size: 100,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "license",
        header: "License Type",
        size: 100,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({ columns, data,
    muiTableBodyRowProps: ({row}) => ({
      onClick:(event) => {
        handleDriverModal();
      },
      sx: {
        cursor: "pointer", //you might want to change the cursor too when adding an onClick
      },
    })
   });

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        table={table}
        enableRowActions
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
      <div className={`${driverModal? "absolute z-[100]" : "hidden"
          } top-[60px] left-[20%]`}>
            < DriverModal setDriverModal={setDriverModal} />
      </div>
    </>
  );
};

export default DriverTable;
