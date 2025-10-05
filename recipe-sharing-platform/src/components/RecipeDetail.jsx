import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center py-20 text-gray-500">Loading recipe...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>

        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">🧂 Ingredients</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {(recipe.ingredients || [
              "2 cups flour",
              "1 tsp salt",
              "1 tbsp olive oil",
              "1 cup water",
            ]).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">👩‍🍳 Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            {(recipe.instructions || [
              "Mix ingredients in a bowl.",
              "Heat the pan and add the mixture.",
              "Cook until golden brown.",
              "Serve warm and enjoy!",
            ]).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="inline-block mt-4 text-blue-600 font-medium hover:underline"
        >
          ← Back to Recipes
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
