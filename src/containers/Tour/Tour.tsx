import React from 'react';
import { Page } from '@layouts';
import Text from './Text';
import TourImg from './tour-min.jpg';

const Tour = () => (
  <Page className="tour">
    <div className="image">
      <img src={TourImg} alt="הופעה" title="צילום: שלומי פרין" />
    </div>
    <Text />
  </Page>
);

export default Tour;
