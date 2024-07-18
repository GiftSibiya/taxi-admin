import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from "material-react-table";
import DriverModal from "../modals/detail/DriverModal";

import driverData from "../../assets/json/drivers.json"

const DriverTable = () => {
  const [driverModal, setDriverModal] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDriverModal = (rowData) => {
    setSelectedRow(rowData);
    setDriverModal(true)
  }

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
        accessorKey: "address.street",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "license.code",
        header: "License Type",
        size: 100,
      },
      {
        accessorKey: "age",
        header: "Age",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({ columns, data: driverData,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        handleDriverModal(row.original);
      },
      sx: {
        cursor: "pointer",
      },
    })}
  );

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={driverData}
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
            <DriverModal setDriverModal={setDriverModal} selectedRow={selectedRow} />

      </div>
    </>
  );
};

export default DriverTable;
