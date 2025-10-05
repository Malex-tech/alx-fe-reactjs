import React, { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 2,
    title: "Chicken Tikka Masala",
    summary:
      "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Avocado Toast",
    summary:
      "Toasted sourdough topped with creamy avocado, poached eggs, and a sprinkle of chili flakes.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Beef Stir Fry",
    summary:
      "Tender beef slices with fresh vegetables tossed in a savory soy-garlic sauce.",
    image: "https://via.placeholder.com/300x200",
  },
];

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch mock data from the local JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍳 Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{recipe.summary}</p>
              <a
                href={`/recipes/${recipe.id}`}
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

<Link
  to="/add-recipe"
  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mt-4"
>
  + Add New Recipe
</Link>

export default HomePage;
