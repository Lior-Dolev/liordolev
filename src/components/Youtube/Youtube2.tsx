import React, { useState, useEffect } from 'react';
import { YoutubeProps } from './types';

const YOUTUBE_HEIGHT_RATIO = 0.5625;
const YOUTUBE_WIDTH_RATIO = 1.7777;
// const PADDING = 0.1;
// const SIZE = 1 - PADDING;

const VideoSrc = {
  'משכך כאבים': 'https://www.youtube.com/embed/BSkZqI0RZ9Q',
  כשתחזרי: 'https://www.youtube.com/embed/gSeXrjg-dIY',
  'גור אדם': 'https://www.youtube.com/embed/1ox_bhebTco',
  'הלב המשומש': 'https://www.youtube.com/embed/EA7MUVn5wHA',
};

const Youtube = ({ trackName, containerId }: YoutubeProps) => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  const onResize = () => {
    const containerWidth = document.getElementById(containerId).clientWidth;
    const containerHeight = document.getElementById(containerId).clientHeight;

    const maxWidth = Math.min(
      containerHeight * YOUTUBE_WIDTH_RATIO,
      containerWidth,
    );

    setWidth(maxWidth);
    setHeight(maxWidth * YOUTUBE_HEIGHT_RATIO);
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <iframe
      src={`${VideoSrc[trackName]}?rel=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      width={width}
      height={height}
      title={trackName}
    />
  );
};
export default Youtube;
