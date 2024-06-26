import React, { useState } from "react";
import StudentsTable from "../students/StudentsTable";
import CreateStudentPop from "../students/CreateStudentPop";

export default function Students() {
  const [studentCreatePop, setStudentPopup] = useState(false);

  const handleStudentCreate = () => {
    setStudentPopup(true);
  };
  return (
    <div className="flex flex-col items-center bg-gray-200 h-full rounded-tl-2xl">
      <div className="flex ring-1 w-[95%] m-2 justify-end">
        <button
          className="bg-green-500 p-2 rounded-2xl text-white text-sm"
          onClick={handleStudentCreate}
        >
          Create Student
        </button>
      </div>
      <div className="w-[95%]">
        <StudentsTable />
      </div>
      <div
        className={`${
          studentCreatePop ? "absolute z-[100]" : "hidden"
        } top-[60px] left-[20%]`}
      >
        <CreateStudentPop setStudentCreate={setStudentPopup} />
      </div>
    </div>
  );
}
