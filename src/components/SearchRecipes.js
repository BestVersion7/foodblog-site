import React, { useState, useEffect } from "react";
import RecipeForm from './RecipeAPI/RecipeForm';
import RecipeItems from './RecipeAPI/RecipeItems';

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState("true");
  //api call default link to that
  const apicall = async (e = "chicken") => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`
    );
    const data = await response.json();
    const items = data.meals;
    if (items !== null) {
      setRecipes(items);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  /*function handleRecipeDirectionClick () {
    let directionDisplay = document.querySelector('.recipeInstructions');
    if (directionDisplay.style.display === 'none') {
      directionDisplay.style.display = 'unset';
    } else {
      directionDisplay.style.display = 'none';
    }
  }*/

  return (
    <>
      <RecipeForm
        ChangeOption = {apicall}
      />

      {loading ?
        <p> Loading... </p> :
        recipes.map((item,index) =>
        <RecipeItems
          item = {item}
          key = {index}
        />
      )}
    </>
  );
};
