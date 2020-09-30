import React from 'react';
import { YoutubeProps } from './types';

// const YOUTUBE_HEIGHT_RATIO = 0.5625;
// const YOUTUBE_WIDTH_RATIO = 1.7777;

const VideoSrc = {
  'משכך כאבים': 'https://www.youtube.com/embed/BSkZqI0RZ9Q',
  כשתחזרי: 'https://www.youtube.com/embed/gSeXrjg-dIY',
  'גור אדם': 'https://www.youtube.com/embed/1ox_bhebTco',
  'הלב המשומש': 'https://www.youtube.com/embed/EA7MUVn5wHA',
};

const Youtube = ({ trackName }: YoutubeProps) => (
  <iframe
    src={`${VideoSrc[trackName]}?rel=0&controls=0&autoplay=1&mute=1`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    // allowFullScreen
    width="100%"
    height="375px"
    title={trackName}
  />
);

export default Youtube;
