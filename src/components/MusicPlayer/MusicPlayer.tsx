import React, { useState, useRef } from 'react';
import { Button } from 'semantic-ui-react';
import { MusicPlayerProps } from './types';
import * as Albums from './Albums';
import AlbumCover from './AlbumCover';
import TracksList from './TracksList';

const MusicPlayer = ({ albumName }: MusicPlayerProps) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [time, setTime] = useState('');
  const audioRef = useRef<HTMLAudioElement>();

  const {
    title, artist, tracks, artworkSrc,
  } = Albums[albumName];
  const { title: trackTitle, src } = tracks[trackIndex];

  const nextTrack = () => {
    if (!autoPlay) {
      setAutoPlay(true);
    }
    if (trackIndex === tracks.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex(trackIndex + 1);
    }
  };

  const previousTrack = () => {
    if (!autoPlay) {
      setAutoPlay(true);
    }
    if (trackIndex === 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: trackTitle,
      artist,
      album: title,
      artwork: [
        '96x96',
        '128x128',
        '192x192',
        '256x256',
        '384x384',
        '512x512',
      ].map((size) => ({
        src: artworkSrc,
        sizes: size,
        type: 'image/png',
      })),
    });

    navigator.mediaSession.setActionHandler('nexttrack', nextTrack);

    navigator.mediaSession.setActionHandler('previoustrack', previousTrack);
  }

  const onPlay = () => {
    if (!autoPlay) {
      setAutoPlay(true);
    }
    audioRef.current.play();
  };

  const onPause = () => {
    audioRef.current.pause();
  };

  const convertTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds - minutes * 60);
    const dozens = Math.floor(seconds / 10);
    const units = seconds % 10;
    return `${minutes}:${dozens}${units}`;
  };

  const onTimeUpdate = () => {
    const { duration, currentTime } = audioRef.current;

    if (
      Number.isNaN(duration)
      || Number.isNaN(currentTime)
      || duration === 0
      || currentTime === 0
    ) {
      setProgressValue(0);

      if (!Number.isNaN(duration) && duration !== 0) {
        setTime(`0:00 / ${convertTime(duration)}`);
      } else {
        setTime('0:00');
      }
    } else {
      setProgressValue(currentTime / duration);
      setTime(`${convertTime(currentTime)} / ${convertTime(duration)}`);
    }
  };

  const onProgressClick = (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>,
  ) => {
    const percent = (e.clientX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth;

    audioRef.current.currentTime = percent * audioRef.current.duration;
    setProgressValue(percent);
  };

  const onProgressTimeKeyDown = (
    e: React.KeyboardEvent<HTMLProgressElement>,
  ) => {
    if (e.which === 67) {
      if (isPlaying) {
        onPause();
      } else {
        onPlay();
      }
    }
  };

  const onTrackClick = (i: number) => {
    setTrackIndex(i);

    if (!autoPlay) {
      if (i === 0) {
        onPlay();
      }

      setAutoPlay(true);
    }
  };

  const activeTrack = autoPlay ? trackIndex : undefined;

  return (
    <div className="music-player">
      <AlbumCover src={artworkSrc} alt="משכך כאבים" />
      <div className="track">
        <span className="name">{trackTitle}</span>
        <span className="extra">{`${artist} / ${title}`}</span>
      </div>
      <div className="audio-player">
        <audio
          autoPlay={autoPlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={onTimeUpdate}
          onLoadedData={onTimeUpdate}
          ref={audioRef}
          src={src}
          preload="auto"
        />
        <div className="controls">
          {!isPlaying && <Button onClick={onPlay} size="mini" icon="play" />}
          {isPlaying && <Button onClick={onPause} size="mini" icon="pause" />}
          <Button onClick={previousTrack} size="tiny" icon="step backward" />
          <Button onClick={nextTrack} size="tiny" icon="step forward" />
          <progress // eslint-disable-line
            className="time"
            value={progressValue}
            max={1}
            onClick={onProgressClick}
            onKeyDown={onProgressTimeKeyDown}
          />
          <span className="time">{time}</span>
        </div>
      </div>
      <TracksList
        tracks={tracks}
        onTrackClick={onTrackClick}
        activeTrack={activeTrack}
      />
    </div>
  );
};

export default MusicPlayer;
