import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from "material-react-table";

// Modals
import VehicleModal from "../modals/detail/VehicleModal";

// Data
import vehicelData from "../../assets/json/vehicle.json"

const VehicleTable = () => {
  const [vehicelModal, setVehicleModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleVehicleModal = (rowData) => {
    setVehicleModal(true);
    setSelectedRow(rowData)
    console.log("popup is Opened");
  };
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "status",
        header: "Status",
        size: 100,
      },
      {
        accessorKey: "plate_number",
        header: "Plate Number",
        size: 100,
      },
      {
        accessorKey: "km",
        header: "Milage",
        size: 100,
      },
      {
        accessorKey: "detail",
        header: "Detail",
        size: 200,
      },
      {
        accessorKey: "driver",
        header: "Driver",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data : vehicelData,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        console.info(event, row.id, "Row has been clicked");
        handleVehicleModal(row.original);
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
        data={vehicelData}
        table={table}
        enableRowActions
        onClick={handleVehicleModal}
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
          vehicelModal ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}
      >
        <VehicleModal setVehicleModal={setVehicleModal} selectedRow={selectedRow} />
      </div>
    </>
  );
};

export default VehicleTable;
