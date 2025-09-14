// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes.length) {
    return <p>No recipes yet — go add one.</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} style={{ marginBottom: 8 }}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            {" — "}
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginLeft: 8 }}>
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
