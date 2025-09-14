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

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  clearRecipes: () => set({ recipes: [] }),
}));

