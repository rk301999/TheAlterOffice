import { ChangeEvent, useState } from "react";
import Quote from "../components/Quote";
import TextField from "../components/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast"

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick=async()=>{
    try {
        let response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/auth/register`,{
            name,
            email,
            password,
        })
        sessionStorage.setItem("token",response.data.token)
        navigate("/")
        toast.success("Successfully Registered")
    } catch (error) {
        toast.error("Error while registering the user")
    }
  }

  return (
    <div className="grid grid-rows-1 md:grid-cols-2 h-[100vh] bg-slate-50">
        
      <div className="  h-[100vh] flex  flex-col items-center justify-center relative bg-signup bg-no-repeat bg-[30%] ">
        <div className="w-[90%] md:w-[60%] flex flex-col gap-2  items-center justify-center p-5">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Create an account
          </h1>
          <h3 className="text-slate-500 font-xl">
            Already have an account ?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Signin
            </span>
          </h3>
          <TextField
            title="Email"
            placeholder="Enter your email"
            name="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <TextField
            title="Name"
            placeholder="Enter your name"
            name="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />

          <TextField
            title="Password"
            placeholder=""
            name="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />

          <button className="text-white w-full px-1 py-3 bg-red-600 border-2 border-white rounded-md text-md md:text-xl" onClick={handleClick}>
            Signup
          </button>
        </div>
      </div>
      
        <Quote/>
      
    </div>
  );
};

export default Signup;
