import React from "react";

function About() {
  return (
    <div className="align-content flex flex-col items-center gap-9">
      <div className="">
        <h2 className="text-5xl mx-auto  text-center mb-5 mt-6">
          Recipes of Uzbek National Dishes: About Us
        </h2>
        <p className="text-xl  text-center">
          This website presents authentic recipes of Uzbek, Kazakh, and Turkish
          national dishes. Our goal is to showcase popular dishes and provide
          interesting information about them. We aim to introduce our audience
          to the culinary heritage and traditions of Uzbekistan, offering
          opportunities for exploration and learning about our modern kitchen
          culture.
        </p>
        <div>
          <img
            className="mx-auto mt-12"
            src="https://cdn0.iconfinder.com/data/icons/lifestyle-entertainment-vol-2-outline/512/food_serving_service_waiter-256.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
