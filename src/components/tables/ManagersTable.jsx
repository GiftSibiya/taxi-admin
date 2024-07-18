import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from "material-react-table";

// Components
import ManagerModal from "../modals/detail/ManagerModal";

import managerData from "../../assets/json/manager.json"

const ManagersTable = () => {
  const [managerModal, setManagerModal] = useState(false);

  const handleStudentPopUp = () => {
    setManagerModal(true);
    console.log("popup is Opened");
  };
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "fullName",
        header: "Full Name",
        size: 100,
      },
      {
        accessorKey: "date",
        header: "Enrolled Date",
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
        accessorKey: "status",
        header: "Status",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data : managerData,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
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
        data={managerData}
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
          managerModal ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}>
        < ManagerModal setManagerModal={setManagerModal} />
      </div>
    </>
  );
};

export default ManagersTable;
