import React from 'react';

import RecipeInstructions from '../components/RecipeInstructions';
import CustomerReviews from '../components/CustomerReviews';
import SearchRecipes from '../components/SearchRecipes';

export default() => {
  return (
    <div style={styles.container}>
      <SearchRecipes />
      <RecipeInstructions />
      <CustomerReviews />
    </div>
  )
}

const styles ={
  container: {
    margin: '0 2.5%'
  }
}
