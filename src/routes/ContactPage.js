import React from 'react';
import '../styles/layout.css';

import PageNavigation from '../components/PageNavigation';
import ContactForm from '../components/ContactForm';

export default() => {
  return (
    <div className="yes">
      <PageNavigation />
      <main><ContactForm /></main>
    </div>
  )
}
