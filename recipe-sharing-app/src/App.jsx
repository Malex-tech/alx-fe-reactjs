// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

const App = () => {
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


