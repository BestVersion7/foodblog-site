import React from 'react';

import PageNavigation from '../components/PageNavigation';
import PageFooter from '../components/PageFooter';
import RecipeImageCards from '../components/RecipeImageCards';
import BookImageCards from '../components/BookImageCards';

const HomePage = () => {
  return (
    <div>
      <PageNavigation />
      <RecipeImageCards />
      <BookImageCards />
      <PageFooter />
    </div>
  )
}

export default HomePage;
