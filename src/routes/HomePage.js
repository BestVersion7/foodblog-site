import React from 'react';

import RecipeImageCards from '../components/HomepageRecipeCards/RecipeImageCards';
import BookImageCards from '../components/BookCardsApi/BookImageCards';
import HomeTrendingRecipes from '../components/HomeTrendingRecipes';
export default() => {
  return (
    <>
      <div style={{'margin':'0 2.5%'}}>
        <h4 style={{"background": "yellow"}}>
          New Site: 
          <a
          href="https://goldenwine.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          > https://goldenwine.herokuapp.com/</a>
        </h4> 
        <p><i>Last update: 10 April 2019</i></p>
        <p> These are static images (Check my Heroku site for dynamic images stored on Cloudinary!) </p>
        <HomeTrendingRecipes />
        <RecipeImageCards />
        <BookImageCards />
      </div>
    </>
  )
}

