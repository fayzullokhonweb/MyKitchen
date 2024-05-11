import React from "react";

function Home() {
  return (
    <div className="scroll-smooth align-content relative">
      <div className=" flex flex-col items-center justify-center  ">
        <h2 className="text-5xl mb-6 font-semibold font-serif mt-9">
          World of Uzbek Cuisine: Traditional Dish Recipes
        </h2>
        <p className="text-xl">
          This website presents famous recipes for Uzbek cuisine prepared in a
          modern style and adapted for contemporary taste.
        </p>
      </div>
      <div className="absolute items-center right-96 top-60   hover:animate-bounce ">
        <img src="./assets/undraw.svg" alt="undraw-img" className=" h-72 " />
      </div>

    </div>
  );
}

export default Home;
