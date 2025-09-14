// src/components/FavoritesList.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore((state) => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    return <p className="text-center text-gray-500">No favorites yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">❤️ My Favorites</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="p-3 border rounded shadow">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
