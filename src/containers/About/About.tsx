import React from 'react';
import { Page } from '@layouts';
import Text from './Text';
import Lior from './lior.jpg';

const About = () => (
  <Page className="about">
    <div className="image">
      <img src={Lior} alt="ליאור" />
    </div>
    <Text />
  </Page>
);

export default About;
