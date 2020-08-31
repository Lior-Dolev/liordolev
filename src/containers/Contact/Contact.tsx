import React from 'react';
import { Page } from '@layouts';

const Contact = () => (
  <Page>
    <h1>צרו קשר</h1>
    <section>
      <h2>לפניות תקשורת:</h2>
      <h3>עמרי צורף</h3>
      <a href="tel:0547330371" data-content="0547330371" data-type="phone">
        <span>054-7330371</span>
      </a>
    </section>
    <section>
      <h2>לפניות נוספות:</h2>
      <a
        href="mailto:info@liordolev.com"
        target="_self"
        data-content="info@liordolev.com"
        data-type="mail"
      >
        <span>info@liordolev.com</span>
      </a>
    </section>
  </Page>
);

export default Contact;
