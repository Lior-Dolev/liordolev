import React, { useEffect, useState } from 'react';
import { isBrowser } from 'react-device-detect';
import { YoutubeProps } from './types';

const VideoSrc = {
  'משכך כאבים': 'BSkZqI0RZ9Q',
  כשתחזרי: 'gSeXrjg-dIY',
  'גור אדם': '1ox_bhebTco',
  'הלב המשומש': 'EA7MUVn5wHA',
  'live session': 'HWFwNGC_SOs',
};

const YTB_HEIGHT_RATIO = 0.5625;
const YTB_WIDTH_RATIO = 1.7777;

const YoutubeQueryParams = {
  autoPlay: () => 'autoplay=1',
  mute: () => 'mute=1',
  loop: (id: string) => `loop=1&playlist=${id}`,
  hideControls: () => 'controls=0',
};

type QueryParamsKey = keyof typeof YoutubeQueryParams;

type YoutubeQueryParamsConfig = {
  [key in QueryParamsKey]: boolean;
};

const srcBuilder = (
  id: string,
  params: YoutubeQueryParamsConfig = {
    autoPlay: true,
    mute: true,
    loop: true,
    hideControls: false,
  },
) => {
  const baseUrl = `https://www.youtube-nocookie.com/embed/${id}?rel=0`;

  let queryParams = '';
  const newParams = { ...params, mute: isBrowser };

  Object.entries(newParams).forEach(([key, value]) => {
    if (value) {
      queryParams += `&${YoutubeQueryParams[key](id)}`;
    }
  });

  return baseUrl + queryParams;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxWidth = Math.min(
    windowDimensions.height * YTB_WIDTH_RATIO,
    windowDimensions.width - 40,
    375 * YTB_WIDTH_RATIO,
  );

  return {
    height: maxWidth * YTB_HEIGHT_RATIO,
    width: maxWidth,
  };
}

const Youtube = ({ trackName }: YoutubeProps) => {
  const dimensions = useWindowDimensions();

  return (
    <iframe
      src={srcBuilder(VideoSrc[trackName])}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      width={dimensions.width}
      height={dimensions.height}
      title={trackName}
    />
  );
};

export default Youtube;
