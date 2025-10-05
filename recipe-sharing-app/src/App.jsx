// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import useRecipeStore from './components/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
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
    <BrowserRouter>
      <header className="p-4 bg-gray-100 flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/recipes" className="text-blue-600 hover:underline">Recipes</Link>
      </header>

      <main className="p-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-3xl font-bold text-center mb-4">🍳 Recipe Sharing App</h1>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
                <RecommendationsList />
                <FavoritesList />
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
