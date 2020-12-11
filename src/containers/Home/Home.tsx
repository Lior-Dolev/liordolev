import React from 'react';
import { Letter, SocialNav, Youtube } from '@components';
import { Button } from 'semantic-ui-react';
import { Page } from '@layouts';
import { HomeProps } from './types';

const Home = ({ tabIndex }: HomeProps) => (
  <Page className="home">
    <div className="image-container">
      <Youtube trackName="live session" />
      <Button
        as="a"
        href="https://backl.ink/143515684"
        target="_blank"
        inverted
        tabIndex={tabIndex}
      >
        כאבי גדילה EP זמין להאזנה
      </Button>
      <div className="social">
        <SocialNav tabIndex={tabIndex} />
      </div>
    </div>
    <Letter />
  </Page>
);

export default Home;
