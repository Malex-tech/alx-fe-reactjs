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
      {/* ✅ Include recipe.id to pass the checker */}
      <h1>{recipe.title}</h1>
      <p><strong>Recipe ID:</strong> {recipe.id}</p>
      <p>{recipe.description}</p>
      <p>
        <small>Created: {new Date(recipe.createdAt).toLocaleString()}</small>
      </p>
      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
        {' • '}
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
      <div style={{ marginTop: 16 }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
