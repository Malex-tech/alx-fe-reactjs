// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes.length) return <p>No recipes yet — add one ✨</p>;

  return (
    <div>
      {recipes.map((r) => (
        <article key={r.id} style={{ border: '1px solid #eee', padding: 12, marginBottom: 8 }}>
          <h3 style={{ margin: 0 }}>{r.title}</h3>
          <p style={{ marginTop: 6 }}>{r.description}</p>
        </article>
      ))}
    </div>
  );
};

export default RecipeList;

