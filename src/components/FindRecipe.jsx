const categories = [
    {name: "Cake", img:"/FoodImages/Cake.jpeg"},
    {name: "Pasta", img:"/FoodImages/Pasta.jpeg"},
    {name: "Rice", img:"/FoodImages/Rice.jpeg"},
    {name: "Salad", img:"/FoodImages/Salad.jpeg"},
    {name: "Beverages", img:"/FoodImages/Beverages.jpeg"},
    {name: "HamBurger", img:"/FoodImages/HamBurger.jpeg"},
    {name: "Dessert", img:"/FoodImages/Dessert.jpeg"},
    {name: "Pizza", img:"/FoodImages/Pizza.jpeg"},
];

const FindRecipe = () => {
    return (
            <section className="py-12 bg-gradient-to-r from-yellow-50 to-yellow-100">
            <h1 className="text-3xl font-bold text-center pt-10 text-amber-900 font-sans">Find Recipes by Category</h1>

        <div className="pt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"> {categories.map((cat) => (
        <div key={cat.name} className="flex items-center gap-3 bg-white rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition">
        <img src={cat.img} alt={cat.name} className="w-12 h-12 rounded-full object-cover"/>
        <span className="font-semibold text-gray-800">{cat.name}</span>
        </div>
        ))}
      </div>
      </section>
    );
};

export default FindRecipe;