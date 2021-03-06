import React from 'react';
import { Page } from '@layouts';
import Text from './Text';
import TourImg from './tour.jpg';

const Tour = () => (
  <Page className="tour" path="הופעות">
    <div className="image">
      <img src={TourImg} alt="הופעה" title="צילום: גיא לומר" />
    </div>
    <Page.Header header="הופעות" />
    <Text />
  </Page>
);

export default Tour;
