import { FiSearch } from "react-icons/fi";
import FeaturedRecipe from "../components/FeaturedRecipe";
import FindRecipe from "../components/FindRecipe";
import LatestCheck from "../components/LatestCheck";
import NewRecipe from "../components/NewRecipe";
import SubscribeNewsLetter from "../components/SubscribeNewsLetter";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      {" "}
      <main className="pt-32 flex items-start justify-between px-10">
        {" "}
        {/* Left side content (text + buttons + search) */}{" "}
        <div>
          {" "}
          <h1 className="text-5xl font-bold text-black/90 ml-2">
            {" "}
            Learn cooking in a <br />
            <span className="block mt-3">simple way</span>
          </h1>
          <p className="mt-4 ml-2 text-black/70 font-semibold">
           
            Over 10,000+ food recipes from all around the world <br /> you can
            try. Start cooking now!
          </p>
          <div className="mt-7 flex items-center ml-2">
            
            <button className="bg-yellow-600 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-200">
              Get Started
            </button>
            <input
              type="text"
              placeholder="Search recipes..."
              className="bg-[#e8b070]/60 px-4 py-2 ml-4 rounded outline-none"
            />
            <button className="bg-yellow-600 rounded px-3 py-2 ml-3 hover:bg-yellow-500 transition">
             
              <FiSearch className="text-black w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Right side image */}
        <div className="flex-shrink-0">
          <img
            src="/Logo/ChefImage.png"
            alt="Chef Image"
            className="w-[400px] h-auto object-contain"
          />
        </div>
      </main>
      <FeaturedRecipe /> 
      <FindRecipe /> 
      <LatestCheck /> 
      <NewRecipe />
      <SubscribeNewsLetter /> 
      <Footer />
    </>
  );
};
export default HomePage;
