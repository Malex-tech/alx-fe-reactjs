// src/components/RecommendationsList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  if (recommendations.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">✨ Recommended for You</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {recommendations.map((recipe) => (
          <div key={recipe.id} className="p-3 border rounded shadow">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
