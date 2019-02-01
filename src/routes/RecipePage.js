import React from 'react';

//import RecipeInstructions from '../components/RecipeInstructions';
import CustomerReviews from '../components/Recipe-reviews/CustomerReviews';
import SearchRecipes from '../components/SearchRecipes';

export default() => {
  return (
    <div style={styles.container}>
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
