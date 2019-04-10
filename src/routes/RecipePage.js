import React from 'react';

//import RecipeInstructions from '../components/RecipeInstructions';
import CustomerReviews from '../components/Recipe-reviews/CustomerReviews';
import SearchRecipes from '../components/RecipeAPI/SearchRecipes';

export default() => {
  return (
    <div style={styles.container}>
      <p> Retrieved from free public API (Check out my heroku site using my own RESTful API and JWT authentication) </p>
      <SearchRecipes />
      <CustomerReviews />
    </div>
  )
}

const styles ={
  container: {
    margin: '0 2.5%'
  }
}


/*
<SearchRecipes />
<RecipeInstructions />
*/
