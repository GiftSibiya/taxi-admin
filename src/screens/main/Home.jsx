import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "../../components/main/Dash";
import Students from "../../components/main/Students";
import SideBar from "../../components/SideBar";
import Login from "../../screens/Auth/Login";
import SignUp from "../../screens/Auth/Register";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
    <div className="flex ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* Use Home component for '/Home' path */}
          <Route path="/Home" element={<Home />} />
          {/* Define routes for Dash and Students */}
          <Route path="/Dash" element={<Dash />} />
          <Route path="/Students" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
