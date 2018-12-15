import React from 'react';

import PageNavigation from '../components/PageNavigation';
import RecipeImageCards from '../components/RecipeImageCards';
import BookImageCards from '../components/BookImageCards';

export default() => {
  return (
    <div>
      <PageNavigation />
      <RecipeImageCards />
      <BookImageCards />
    </div>
  )
}
