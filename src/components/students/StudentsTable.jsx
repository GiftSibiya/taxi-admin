import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from "material-react-table";
import StudentPopUp from "./StudentPopUp";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    fullName: "John Doe ",
    address: "261 Erdman Ford",
    license: "Code 10 PrDP",
    date: "12/12/2023",
    status: "Passed",
  },
  {
    fullName: "Jane Doe",
    address: "769 Dominic Grove",
    license: "Code 10",
    date: "10/12/2023",
    status: "Learners Training",
  },
  {
    fullName: "Joe Doe",
    address: "566 Brakus Inlet",
    license: "Code 10 PrDP",
    date: "10/10/2023",
    status: "Failed",
  },
  {
    fullName: "Kevin Vandy ",
    address: "722 Emie Stream",
    license: "Code 8 ",
    date: "05/12/2023",
    status: "Passed",
  },
  {
    fullName: "Joshua Rolluffs",
    address: "32188 Larkin Turnpike",
    license: "Code 10 ",
    date: "01/12/2023",
    status: "Driving Training",
  },
];

const StudentsTable = () => {
  const [studentPopup, setStudentPopup] = useState(false);

  const handleStudentPopUp = () => {
    setStudentPopup(true);
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
          studentPopup ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}
      >
        <StudentPopUp setStudentPopup={setStudentPopup} />
      </div>
    </>
  );
};

export default StudentsTable;
