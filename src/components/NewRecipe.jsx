import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
const NewRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
        );
        setRecipes(res.data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <h1 className="ml-13 font-bold text-black text-xl font-sans">
        Dessert Calls
      </h1>
      <section className="mt-2 py-15 px-10 bg-linear-to-r from-yellow-50 to-yellow-100">
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="p-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {recipe.strMeal}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    By Chef {recipe.strArea}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex itmes-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">(4.2/5)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
export default NewRecipe;
