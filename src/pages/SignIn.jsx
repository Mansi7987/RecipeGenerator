import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    // you can add validation here later
    login(); // store dummy token
    navigate("/home"); // go to homepage
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Left half - yellow */}
      <div className="bg-amber-400/90 w-1/2 h-full"></div>

      {/* Right half - white */}
      <div className="bg-white w-1/2 h-full"></div>

      {/* Overlapping box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-3/4 max-w-4xl h-[90%] flex rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

        {/* Left side - form */}
        <div className="bg-white w-1/2 flex flex-col items-center justify-start pt-20 px-10">
          <h1 className="text-3xl font-bold text-amber-400 mb-10">Sign In</h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full max-w-sm border border-gray-300 rounded-full px-5 py-3 mb-5 focus:ring-2 focus:ring-amber-400"
          />

          <div className="relative w-full max-w-sm mb-5">
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
            onClick={handleSignIn}
            className="w-full max-w-sm bg-amber-400 text-white font-semibold rounded-full py-3 shadow-md hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Sign In
          </button>

          <p className="mt-4 text-gray-600 text-sm">
            Forgot your password?
          </p>
        </div>

        {/* Right side */}
        <div className="bg-amber-400/90 w-1/2 flex flex-col items-center justify-start pt-20">
          <h1 className="text-3xl font-bold text-white">Welcome To</h1>
          <h2 className="text-4xl font-bold text-white mt-3">
            Mom<span className="text-black/70">Kitchen!</span>
          </h2>

          <h2 className="mt-10 text-white/80 underline">New here?</h2>
          <button
            onClick={() => navigate("/signup")}
            className="mt-10 px-8 py-3 bg-white text-amber-500 font-semibold rounded-full shadow-md hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
