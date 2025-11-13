import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    login(); // simulate sign up -> login
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="bg-white w-1/2 h-full"></div>
      <div className="bg-amber-400/90 w-1/2 h-full"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-3/4 max-w-4xl h-[90%] flex rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

        {/* Left - Welcome */}
        <div className="bg-amber-400/90 w-1/2 flex flex-col items-center justify-start pt-30">
          <h1 className="text-3xl font-bold text-white">Welcome To</h1>
          <h2 className="text-4xl font-bold text-white mt-3">
            Mom<span className="text-black/70">Kitchen!</span>
          </h2>

          <p className="mt-15 text-white text-sm">Already have an account?</p>
          <button
            onClick={() => navigate("/signin")}
            className="mt-10 px-8 py-3 bg-white text-amber-500 font-semibold rounded-full shadow-md hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Sign In
          </button>
        </div>

        {/* Right - Form */}
        <div className="bg-white w-1/2 flex flex-col items-center justify-start pt-20">
          <h2 className="text-4xl font-bold text-amber-400/80">Create Account</h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full max-w-sm border border-gray-300 rounded-full px-5 py-3 mt-10 focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-sm border border-gray-300 rounded-full px-5 py-3 mt-5 focus:ring-2 focus:ring-amber-400"
          />

          <div className="relative w-full max-w-sm mt-5">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full px-5 py-3 pr-12 focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-amber-400"
            >
              {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
            </button>
          </div>

          <button
            onClick={handleSignUp}
            className="mt-8 px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-md hover:bg-amber-400 hover:text-black transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
