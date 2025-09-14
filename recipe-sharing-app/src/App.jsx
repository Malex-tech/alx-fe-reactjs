// src/App.jsx
import React, { useEffect } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './stores/recipeStore';

function App() {
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  useEffect(() => {
    // starter recipes so the UI isn't empty at first
    const starter = [
      { id: '1', title: 'Jollof Rice', description: 'Smoky tomato rice — Nigerian classic.' },
      { id: '2', title: 'Fried Plantain', description: 'Sweet & caramelized; serve hot.' }
    ];
    setRecipes(starter);
  }, [setRecipes]);

  return (
    <main style={{ maxWidth: 760, margin: '40px auto', padding: 16 }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </main>
  );
}

export default App;

