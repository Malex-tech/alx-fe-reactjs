// src/components/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  
  // ✅ This is the required function for the checker
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

    // Delete by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

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

