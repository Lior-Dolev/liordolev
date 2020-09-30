import React from 'react';
import { Page } from '@layouts';
import { Album, VideoPlayer } from '@components';

const Music = () => (
  <Page className="music">
    <VideoPlayer />
    {/* <MusicPlayer albumName="MESHAKECH_KEEVIM" /> */}
    <Album />
  </Page>
);

export default Music;
