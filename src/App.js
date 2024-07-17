import Login from "./screens/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth Pages
import SignUp from "./screens/Auth/Register";

// Page Components
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

// Main Pages
import Dash from "./components/main/Dash";
import Drivers from "./components/main/Drivers";
import Fleet from "./components/main/Fleet";
import Vehicles from "./components/main/Vehicles";
import Finance from "./components/main/Finance";
import Managers from "./components/main/Managers";
import Schedule from "./components/main/Schedule";
import Profile from "./components/main/Profile";
import Settings from "./components/main/Settings";
import Help from "./components/main/Help";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <SideBar />
        <div className="flex flex-col w-full">
          <NavBar />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/Dash" element={<Dash />} />
            <Route path="/Drivers" element={<Drivers />} />
            <Route path="/Managers" element={<Managers />} />
            <Route path="/Finance" element={<Finance />} />
            <Route path="/Fleet" element={<Fleet />} />
            <Route path="/Vehicle" element={<Vehicles />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
