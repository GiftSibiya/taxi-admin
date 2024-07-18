import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from "material-react-table";
import VehicleModal from "../modals/detail/VehicleModal";

const data = [
  {
    status: "Available",
    plate_number: "CLK 121 GP ",
    detail: "Toyota Quantum",
    driver: "John Piri",
    km: "283 862 KM",
  },
  {
    status: "Busy",
    plate_number: "VDB 234 MP",
    detail: "Toyota Quantum",
    driver: "Not Assigned ",
    km: "328 127 KM",
  },
  {
    status: "Busy",
    plate_number: "GBC 281 GP",
    detail: "Toyota Siyaya",
    driver: "Simon Ndoda",
    km: "190 872 KM",
  },
  {
    status: "Available",
    plate_number: "RFO 967 GP",
    detail: "Toyota Quantum",
    driver: "Not Assigned ",
    km: "234 762 KM",
  },
  {
    status: "Busy",
    plate_number: "CHE 862 GP",
    detail: "Toyota Siyaya",
    driver: "Steve Kekana",
    km: "172 722 KM",
  },
];

const VehicleTable = () => {
  const [vehicelModal, setVehicleModal] = useState(false);

  const handleStudentPopUp = () => {
    setVehicleModal(true);
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
    data,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        console.info(event, row.id, "Row has been clicked");
        handleStudentPopUp();
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
        onClick={handleStudentPopUp}
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
        <VehicleModal setVehicleModal={setVehicleModal} />
      </div>
    </>
  );
};

export default VehicleTable;
