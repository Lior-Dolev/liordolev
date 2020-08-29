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
        <Button inverted>משכך כאבים EP זמין להאזנה</Button>
        <nav>
          <Icon name={'instagram'} />
          <Icon name={'facebook f'} />
          <Icon name={'spotify'} />
          <Icon name={'apple'} />
          <Icon name={'youtube'} />
        </nav>
      </div>
      <Letter />
    </Page>
  );
};

export default Home;
