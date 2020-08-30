import React from 'react';
import { Letter, SocialNav } from '@components';
import { Button } from 'semantic-ui-react';
import { Page } from '@layouts';
import cactus from './cactus.png';

const Home = () => {
  return (
    <Page className={'home'}>
      <div className={'image-container'}>
        <img src={cactus} alt={'משכך כאבים'} />
        <Button
          as={'a'}
          href={'https://orcd.co/lior_dolevep'}
          target={'_blank'}
          inverted
        >
          משכך כאבים EP זמין להאזנה
        </Button>
        <SocialNav />
      </div>
      <Letter />
    </Page>
  );
};

export default Home;
