import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/Dash");
  }

  return (
    <div className="flex flex-col top-0 left-0 absolute bg-white w-screen h-screen">
      <button onClick={handleLogin}> Login </button>
      <div className="">
        Don't have an account?
        <button>
          <Link to="/SignUp">SignUp</Link>
        </button>
      </div>
    </div>
  );
}
