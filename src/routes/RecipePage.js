import React from 'react';

import PageNavigation from '../components/PageNavigation';
import RecipeInstructions from '../components/RecipeInstructions';
import PageFooter from '../components/PageFooter';

const RecipePage = () => {
  return (
    <div>
      <PageNavigation />
      <RecipeInstructions />
      <PageFooter />
    </div>
  )
}

export default RecipePage;
