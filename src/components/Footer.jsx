const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-10 px-6">
      {/* Logo Section */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-2">
          <img
            className="h-10 w-10"
            src="/Logo/FryingPan.png"
            alt="Frying Pan Icon"
          />
          <h1 className="text-2xl font-semibold">
            <span className="text-white">Mom</span>
            <span className="text-yellow-500">Kitchen</span>
          </h1>
        </div>
      </div>
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300 text-left max-w-6xl mx-auto">
        {/* Explore */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-yellow-500/70">
            Explore
          </h2>
          <ul className="space-y-2">
            <li>Home</li> <li>About Us</li> <li>Blog</li> <li>Contact</li>{" "}
          </ul>
        </div>
        {/* Recipes */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-yellow-500">
            Recipes
          </h2>
          <ul className="space-y-2">
            <li>Popular Recipes</li> <li>Newest Recipes</li>{" "}
            <li>Share Your Recipe</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-yellow-500">
            Contact
          </h2>
          <p>Indore, Madhya Pradesh, India</p> <p>📞 +91 9898979695</p>{" "}
          <p>📧 support@momrecipe.com</p>{" "}
        </div>
        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-yellow-500">
            Social Media
          </h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-twitter"></i>{" "}
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        <p>Terms & Conditions | Privacy Policy</p>
        <p>© 2025 MomRecipe. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
