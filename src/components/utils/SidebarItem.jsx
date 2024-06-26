import React from "react";
import { useNavigate } from "react-router-dom";

export default function SidebarItem({ icon, title, path }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-[20px] items-center mb-[10px] cursor-pointer w-[100%] hover:bg-green-300 duration-200 hover:text-white p-2 rounded-2xl"
      onClick={() => navigate(`${path}`)}
    >
      <div className="">{icon}</div>
      <text>{title}</text>
    </div>
  );
}
