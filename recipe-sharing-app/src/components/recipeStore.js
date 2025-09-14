// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
 // Actions
  setRecipes: (newRecipes) => set({ recipes: newRecipes, filteredRecipes: newRecipes }),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // auto-trigger filter
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },

  addRecipe: (recipe) => {
    const updatedRecipes = [...get().recipes, recipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

    // Delete by id
  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

  // NEW: Favorites
  addFavorite: (recipeId) => {
    if (!get().favorites.includes(recipeId)) {
      set((state) => ({ favorites: [...state.favorites, recipeId] }));
      get().generateRecommendations();
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
    get().generateRecommendations();
  },

  // NEW: Recommendation logic (basic mock)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        favorites.includes(recipe.id) ||
        recipe.title
          .toLowerCase()
          .includes(favorites.length > 0 ? 'chicken' : '')
    );

    set({ recommendations: recommended.slice(0, 3) }); // Top 3 suggestions
  },

  // Update recipe by id: pass an object with id + updated fields
  updateRecipe: (updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updated.id ? { ...r, ...updated } : r)),
    })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  clearRecipes: () => set({ recipes: [] }),

}));

export default useRecipeStore;