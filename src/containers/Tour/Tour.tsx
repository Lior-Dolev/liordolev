import React from 'react';
import { Page } from '@layouts';
import Text from './Text';
import TourImg from './Tour.jpg';

const Tour = () => (
  <Page className="tour">
    <div className="image">
      <img src={TourImg} alt="הופעה" />
    </div>
    <Text />
  </Page>
);

export default Tour;
