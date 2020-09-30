import React, { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    videoRef.current.volume = 0;
  }, []);

  return (
    <video
      className="video-player"
      src="https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Video_Clip.mp4"
      preload="auto"
      autoPlay
      ref={videoRef}
    />
  );
};

export default VideoPlayer;
