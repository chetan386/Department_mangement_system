import React from "react";
import { Link} from "react-router-dom";
import back from "./../../images/back.jpg"
import logo from "./../../images/logo.jpg"
const Login = () => {
 
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex  justify-center"
      style={{
        backgroundImage:  `url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div className="flex flex-col items-center mt-10 space-y-32">
      
        <h1 className="flex items-center justify-center p-5 text-4xl font-semibold bg-black text-white w-full text-center py-4 bg-opacity-75 rounded-2xl space-x-10 ">
        <div 

        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "72px",
          width: "72px",
          display: "flex",
          justifyContent:"center",
          align: "center",
          marginRight:"20px"
        }}>
          
        </div>  Deenbandhu Chhotu Ram University of Science and Technology
        </h1>
        
        <div className="grid grid-cols-2 gap-28">
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Faculty</h1>

            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-blue-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Link 
              type="button"
              to="/login/adminLogin"
              className="ml-7 mt-14 flex items-center justify-center bg-red-500 h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Admin
            </Link>
    </div>
  );
};

export default Login;
