import React from 'react';
import { Letter, SocialNav } from '@components';
import { Button } from 'semantic-ui-react';
import { Page } from '@layouts';
import cactus from './cactus.png';
import { HomeProps } from './types';

const Home = ({ tabIndex }: HomeProps) => (
  <Page className="home">
    <div className="image-container">
      <img src={cactus} alt="משכך כאבים" />
      <Button
        as="a"
        href="https://orcd.co/lior_dolevep"
        target="_blank"
        inverted
        tabIndex={tabIndex}
      >
        משכך כאבים EP זמין להאזנה
      </Button>
      <div className="social">
        <SocialNav tabIndex={tabIndex} />
      </div>
    </div>
    <Letter />
  </Page>
);

export default Home;
