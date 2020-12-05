import React from 'react';
import { Page } from '@layouts';
import Text from './Text';
import Lior from './lior-min.jpg';

const About = () => (
  <Page className="about" path="אודות">
    <div className="image">
      <img src={Lior} alt="ליאור" title="צילום: שלומי פרין" />
    </div>
    <Page.Header header="אודות" />
    <Text />
  </Page>
);

export default About;
