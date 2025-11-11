import { FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-10 w-10"
            src="/Logo/FryingPan.png"
            alt="Frying Pan Icon"
          />
          <h1 className="text-2xl font-semibold">
            <span className="text-white">Mom</span>
            <span className="text-yellow-600">Kitchen</span>
          </h1>
        </div>
        <nav className="flex space-x-9">
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-600 cursor-pointer transition-colors duration-200"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-600 cursor-pointer transition-colors duration-200"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-600 cursor-pointer transition-colors duration-200"
          >
            NEWS
          </a>
          <a
            href="#"
            className="text-white font-semibold hover:text-yellow-600 cursor-pointer transition-colors duration-200"
          >
            RECIPES
          </a>
        </nav>
        <div className="flex items-center space-x-12">
          <FiSearch className="text-yellow-600 w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors duration-200" />
          <button className="bg-yellow-600 text-black font-semibold px-4 py-1 rounded hover:bg-yellow-400 transition-colors duration-200">
            {" "}
            Sign In{" "}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
