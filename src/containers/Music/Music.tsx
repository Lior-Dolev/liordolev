import React from 'react';
import { Page } from '@layouts';
import { Album, Youtube } from '@components';

const Music = () => (
  <Page className="music">
    {/* <VideoPlayer /> */}
    <Youtube trackName="משכך כאבים" />
    {/* <MusicPlayer albumName="MESHAKECH_KEEVIM" /> */}
    <Album />
  </Page>
);

export default Music;
