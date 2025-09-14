// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ id, onDeleted }) => {
    const navigate = useNavigate();
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to home after deleting
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
