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
import Schedule from "./components/main/Schedule";
import Team from "./components/main/Team";
import Fleet from "./components/main/Fleet";
import Profile from "./components/main/Profile";
import Settings from "./components/main/Settings";
import Help from "./components/main/Help";
import Transactions from "./components/main/Transactions";
import Products from "./components/main/Products";

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
            <Route path="/Team" element={<Team />} />
            <Route path="/Dash" element={<Dash />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Students" element={<Drivers />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Fleet" element={<Fleet />} />
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
