import React, { useEffect, useState } from "react";
import FlippableCard from "./components/flippable-card/FlippableCard";
import "./App.css";

const App = () => {
  const APP_ID = "6b1f83a3";
  const APP_KEY = "4a862f664699de272b5b773dbe13a761";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search Recipes
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipes) => (
          <FlippableCard
            key={recipes.recipe.label}
            title={recipes.recipe.label}
            calories={recipes.recipe.calories}
            image={recipes.recipe.image}
            ingredients={recipes.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
