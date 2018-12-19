import React from 'react';

import RecipeInstructions from '../components/RecipeInstructions';
import CustomerReviews from '../components/CustomerReviews';

export default() => {
  return (
    <div style={styles.container}>
      <RecipeInstructions />
      <CustomerReviews />
    </div>
  )
}

const styles ={
  container: {
    margin: '2.5%'
  }
}
