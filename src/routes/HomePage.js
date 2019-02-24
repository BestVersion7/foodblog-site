import React from 'react';

import RecipeImageCards from '../components/HomepageRecipeCards/RecipeImageCards';
import BookImageCards from '../components/BookCardsApi/BookImageCards';
import HomeTrendingRecipes from '../components/HomeTrendingRecipes';
export default() => {
  return (
    <>
      <h6 style={{'background':'rgb(233,55,14'}}>Transferring to Heroku for dynamic hosting. Setting up my own server and database. (ExpressJS, MongoDB)</h6>
      <div style={{'margin':'0 2.5%'}}>
        <HomeTrendingRecipes />
        <RecipeImageCards />
        <BookImageCards />
      </div>
    </>
  )
}

