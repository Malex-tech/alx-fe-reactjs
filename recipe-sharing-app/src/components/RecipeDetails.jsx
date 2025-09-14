// src/components/RecipeDetails.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`}>Edit</Link>
        {" | "}
        <DeleteRecipeButton id={id} onDeleted={() => navigate("/")} />
      </div>
    </div>
  );
};

export default RecipeDetails;
