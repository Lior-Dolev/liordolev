import React from 'react';
import { Page } from '@layouts';
import Text from './Text';
import TourImg from './tour.jpg';

const Tour = () => (
  <Page className="tour">
    <div className="image">
      <img src={TourImg} alt="הופעה" title="צילום: גיא לומר" />
    </div>
    <Page.Header header="הופעות - 2021" />
    <Text />
  </Page>
);

export default Tour;
