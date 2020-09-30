import React from 'react';
import MusicPlayer from '../MusicPlayer';
import Lyrics from './Lyrics';

const Album = () => (
  <div className="album-lyrics">
    <Lyrics />
    <MusicPlayer albumName="MESHAKECH_KEEVIM" />
  </div>
);

export default Album;
