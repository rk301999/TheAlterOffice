import toast from "react-hot-toast";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const words =
    "Just like a certain Scranton-based paper company, we believe in working  smart and playing harder.";

    function handleLogout(){
        // localStorage.clear();
        sessionStorage.clear();
        navigate("/signin");
        toast.success("Successfully logged out ")
    }
    function handleLogin(){
      // localStorage.clear();
      sessionStorage.clear();
      navigate("/signin");
    }

  return (
    <div className="pb-40 pt-32 h-screen relative">
      <div className="absolute top-10 right-0">
        {sessionStorage.getItem("token") ? (
          <button
            className="text-white bg-red-700 border-2 border-white px-5 py-1.5 text-xl rounded-md "
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="text-white bg-red-700 border-2 border-white px-5 py-1.5 text-xl rounded-md "
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="Hero-banner flex flex-col w-full justify-center items-center gap-16 md:gap-14 lg:gap-10">
        <div className="right max-w-80">
          <img
            src="https://thealteroffice.com/_next/image?url=%2Fimages%2Falter_office_logo.png&w=640&q=75"
            alt=""
          />
        </div>
        <TextGenerateEffect
          words={words}
          className="text-white object-center "
        />
        <div className="text-slate-500 p-4 shadow-sm shadow-slate-300 rounded-xl italic">
          <h1 className="text-xl font-semibold my-2">
            "You miss 100% of the shots you don't take"
          </h1>
          <p> - Michael Scott</p>
        </div>
        <div onClick={() => navigate("/contact")}>
          <MagicButton item="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
