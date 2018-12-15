import React from 'react';

import RecipeInstructions from '../components/RecipeInstructions';
import PageNavigation from '../components/PageNavigation';

export default() => {
  return (
    <div>
      <PageNavigation />
      <RecipeInstructions />
    </div>
  )
}
