// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p className="text-center text-gray-500">No recipes found.</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="p-4 border rounded shadow">
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <p className="text-gray-600">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
