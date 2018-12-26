import React from 'react';

import RecipeImageCards from '../components/RecipeImageCards';
import BookImageCards from '../components/BookImageCards';
import HomeTrendingRecipes from '../components/HomeTrendingRecipes';
export default() => {
  return (
    <div style={{'margin':'0 2.5%'}}>
      <HomeTrendingRecipes />
      <RecipeImageCards />
      <BookImageCards />
    </div>
  )
}
