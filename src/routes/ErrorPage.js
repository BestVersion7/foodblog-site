import React from 'react';
import PageNavigation from '../components/PageNavigation';

const ErrorPage = () => {
  return (
    <>
      <PageNavigation />
      <p className="display-4 container">
        404 ERROR! THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST!
      </p>
    </>
  )
}

export default ErrorPage;
