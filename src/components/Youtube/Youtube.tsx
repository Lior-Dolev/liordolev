import React from 'react';
import { YoutubeProps } from './types';
import AutoSizer from 'react-virtualized-auto-sizer';

const YOUTUBE_HEIGHT_RATIO = 0.5625;
const YOUTUBE_WIDTH_RATIO = 1.7777;
const PADDING = 0.1;
const SIZE = 1 - PADDING;

const VideoSrc = {
  'משכך כאבים': 'https://www.youtube.com/embed/BSkZqI0RZ9Q',
  כשתחזרי: 'https://www.youtube.com/embed/gSeXrjg-dIY',
  'גור אדם': 'https://www.youtube.com/embed/1ox_bhebTco',
  'הלב המשומש': 'https://www.youtube.com/embed/EA7MUVn5wHA',
};

const Youtube = ({ trackName }: YoutubeProps) => (
  <AutoSizer>
    {({ height, width }) => {
      const paddedHeight = height * SIZE;
      const paddedWidth = width * SIZE;

      const maxWidth = Math.min(
        paddedHeight * YOUTUBE_WIDTH_RATIO,
        paddedWidth,
      );

      return (
        <iframe
          src={`${VideoSrc[trackName]}?rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width={maxWidth}
          height={maxWidth * YOUTUBE_HEIGHT_RATIO}
          style={{ left: (width - maxWidth) / 2 }}
        />
      );
    }}
  </AutoSizer>
);

export default Youtube;
