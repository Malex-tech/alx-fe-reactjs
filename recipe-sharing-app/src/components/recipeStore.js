// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
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
  },

    // Delete by id
  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
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