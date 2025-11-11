const SubscribeNewsLetter = () => {
  return (
    <div className="bg-amber-300/80 py-25 text-center">
      {" "}
      {/* Heading */}{" "}
      <h1 className="text-3xl font-bold font-sans text-black">
        {" "}
        Subscribe Our Newsletter{" "}
      </h1>{" "}
      {/* Subtext */}{" "}
      <p className="mt-4 text-black/70 text-md font-medium">
        {" "}
        Get delicious recipes, kitchen hacks, and cooking inspiration delivered
        straight to your inbox every week.{" "}
      </p>{" "}
      {/* Input + Button */}{" "}
      <div className="mt-8 flex justify-center">
        {" "}
        <div className="flex bg-[#e8b070]/60 rounded-full shadow-md overflow-hidden max-w-md w-full">
          {" "}
          <input
            type="text"
            placeholder="What to explore?"
            className="flex-grow px-5 py-3 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-600"
          />{" "}
          <button className="bg-black text-white px-5 py-3 hover:bg-gray-800 transition">
            {" "}
            Subscribe{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default SubscribeNewsLetter;
