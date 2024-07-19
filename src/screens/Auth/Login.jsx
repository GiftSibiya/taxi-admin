import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/Dash");
  }

  return (
    <div className="flex flex-col items-center justify-center top-0 left-0 absolute bg-slate-100 w-screen h-screen">
      <div className="flex flex-row bg-slate-500 w-[80%] h-[80%] shadow-2xl shadow-black">

        <div className="flex-1 flex mt-[100px] justify-start ">
          <h2 className="text-[100px] pl-5 font-semibold text-white" >Welcome<br/> Back</h2>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center bg-slate-300">
          <div className="flex flex-col items-center justify-center h-[70%] w-[70%]">
            <h2 className="text-[50px] font-semibold ">Login</h2>
            <p className="text-lg my-5">Welcome Back, please log in to access your account</p>
            <div className="my-2">
              <p className="text-xl">User Name</p>
              <input type="text" className="h-[40px] w-[400px] rounded-md"/>
            </div>
            <div className="my-2">
              <p className="text-xl">Password</p>
              <input type="text" className="h-[40px] w-[400px] rounded-md"/>
            </div>
            <div className="flex flex-row justify-between items-center h-[30px] w-[400px] my-2">
              <div className="flex flex-row items-center ">
                <input type="checkbox" name="" id=""/>
                <p className="text-lg mx-2">Remember Me</p>
              </div>
              <p className="">Forgot Password</p>
            </div>
            <button onClick={handleLogin} className="bg-green-500 text-white w-[400px] h-[40px] text-xl rounded-md hover:bg-green-700 duration-150"> Login </button>
            <div className="my-[10px]">
              Don't have an account?
            </div>
            <button className="text-xl font-semibold text-blue-700 cursor-pointer">
              <Link to="/SignUp">SignUp</Link>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
