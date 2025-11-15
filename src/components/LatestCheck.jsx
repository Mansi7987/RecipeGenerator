const LatestCheck = () => {
  return (
    <section className="py-15">
      <h1 className="text-center text-3xl font-bold mb-10">Check our Latest News!
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-40 max-w-5xl mx-auto rounded-2xl md:p-10">
      
        {/* Left Side — Image */}
        <img
          src="/ScreenImage/HandEgg.jpeg"
          alt="HandEgg"
          className="w-[300px] h-[300px] rounded-xl"
        />
        {/* Right Side — Text */}
        <div className="max-w-md text-center md:text-left">
         
          <h2 className="text-xl font-bold text-gray-900 mb-3">
           
            11 Simple Ways to Cook an Egg
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Eggs are one of the most versatile ingredients in the kitchen.
            They're used in everything from breakfast to dessert and delicious
            as a main, side, or topping. Get cracking on these 11 easy ways to
            cook eggs.
          </p>
          <button className="border border-yellow-500 text-yellow-700 font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
export default LatestCheck;
