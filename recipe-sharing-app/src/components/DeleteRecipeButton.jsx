// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ id, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    if (!confirm("Delete this recipe? This cannot be undone.")) return;
    deleteRecipe(id);
    if (typeof onDeleted === "function") onDeleted();
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: 8 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
