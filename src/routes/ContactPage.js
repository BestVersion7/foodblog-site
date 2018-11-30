import React from 'react';

import PageNavigation from '../components/PageNavigation';
import PageFooter from '../components/PageFooter';
import ContactForm from '../components/ContactForm';


const ContactPage = () => {
  return (
    <div>
      <PageNavigation />
      <ContactForm />
      <PageFooter />
    </div>
  )
}

export default  ContactPage;
