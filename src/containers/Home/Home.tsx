import React from 'react';
import { Letter } from '@components';
import { Button, Icon, MenuItem } from 'semantic-ui-react';
import { Page } from '@layouts';
import cactus from './cactus.png';

const Home = () => {
  return (
    <Page className={'home'}>
      <div className={'image-container'}>
        <img src={cactus} />
        <Button
          as={'a'}
          href={'https://orcd.co/lior_dolevep'}
          target={'_blank'}
          inverted
        >
          משכך כאבים EP זמין להאזנה
        </Button>
        <nav>
          <a
            className={'link'}
            href={'https://www.instagram.com/liordolev'}
            target="_blank"
          >
            <Icon name={'instagram'} />
          </a>
          <a
            className={'link'}
            href={'https://www.facebook.com/liordolevofficial'}
            target="_blank"
          >
            <Icon name={'facebook f'} />
          </a>
          <a
            className={'link'}
            href={'https://spoti.fi/3bwNfX8'}
            target="_blank"
          >
            <Icon name={'spotify'} />
          </a>
          <a
            className={'link'}
            href={'https://apple.co/2yyAtZJ'}
            target="_blank"
          >
            <Icon name={'apple'} />
          </a>
          <a
            className={'link'}
            href={'https://www.youtube.com/user/liordolev'}
            target="_blank"
          >
            <Icon name={'youtube'} />
          </a>
        </nav>
      </div>
      <Letter />
    </Page>
  );
};

export default Home;
