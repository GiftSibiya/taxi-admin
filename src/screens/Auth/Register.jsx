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
          <h2 className="text-[100px] pl-5 font-semibold text-white" >Create A New<br/>Account</h2>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center bg-slate-300">
          <div className="flex flex-col items-center justify-center h-[70%] w-[70%]">
            <h2 className="text-[50px] font-semibold ">Register</h2>
            <p className="text-lg my-5">Register You New Account To Explore The <br/> 21st Centuary Way Of Managing Your Fleet</p>

            <div className="flex flex-row w-[400px] justify-between">
              <div className="my-2">
                <p className="text-xl">Full Name</p>
                <input type="text" className="h-[40px] w-[180px] rounded-md p-2" placeholder="Full Name"/>
              </div>
              <div className="my-2">
                <p className="text-xl">Phone</p>
                <input type="text" className="h-[40px] w-[180px] rounded-md p-2" placeholder="Phone Number"/>
              </div>
            </div>

            <div className="my-2">
              <p className="text-xl">Email</p>
              <input type="text" className="h-[40px] w-[400px] rounded-md p-2" placeholder="Email"/>
            </div>
            <div className="my-2">
              <p className="text-xl">Password</p>
              <input type="text" className="h-[40px] w-[400px] rounded-md p-2" placeholder="Enter Password Here"/>
            </div>
            <div className="my-2">
              <p className="text-xl">Confirm Password</p>
              <input type="text" className="h-[40px] w-[400px] rounded-md p-2" placeholder="Confirm Password Here"/>
            </div>
            <div className="flex flex-row justify-between items-center h-[30px] w-[400px] my-2">
              <div className="flex flex-row items-center">
                <input type="checkbox" name="" id=""/>
                <p className="text-lg mx-2">Remember Me</p>
              </div>
              <p className="">Forgot Password</p>
            </div>
            <button onClick={handleLogin} className="bg-green-500 text-white w-[400px] h-[40px] text-xl rounded-md hover:bg-green-700 duration-150">Register</button>
            <div className="my-[10px]">
              Already Have An Account?
            </div>
            <button className="text-xl font-semibold text-blue-700 cursor-pointer">
              <Link to="/">Log In</Link>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
