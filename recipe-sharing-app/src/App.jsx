// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect } from 'react';
import useRecipeStore from './components/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Example: preload with some recipes
    setRecipes([
      { id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian pasta.' },
      { id: 2, title: 'Avocado Toast', description: 'Simple, quick breakfast.' },
    ]);
  }, [setRecipes]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">🍳 Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <RecommendationsList />
      <FavoritesList />
    </div>
  );

  return (
    <BrowserRouter>
      <header style={{ padding: 12 }}>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/">Recipes</Link>
      </header>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Recipe Sharing App</h1>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;


