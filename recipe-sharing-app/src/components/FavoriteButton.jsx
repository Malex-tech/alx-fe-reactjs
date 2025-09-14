// src/components/FavoriteButton.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
  }));

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      className={`px-3 py-1 rounded-md ${
        isFavorite ? 'bg-yellow-400' : 'bg-gray-300'
      }`}
      onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}
    >
      {isFavorite ? '★ Remove Favorite' : '☆ Add Favorite'}
    </button>
  );
};

export default FavoriteButton;
