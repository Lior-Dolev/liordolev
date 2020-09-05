import React, { useState, useRef } from 'react';
import { Page } from '@layouts';
import { Button } from 'semantic-ui-react';
import AlbumCover from './Album_Cover.jpg';

type AudioTrack = {
  trackName: string;
  singer: string;
  albumName: string;
  src: string;
};

const audioList: AudioTrack[] = [
  {
    trackName: 'משכך כאבים',
    singer: 'ליאור דולב',
    albumName: 'משכך כאבים',
    src:
      'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Meshakech_Keevim.mp3',
  },
  {
    trackName: 'כשתחזרי',
    singer: 'ליאור דולב',
    albumName: 'משכך כאבים',
    src:
      'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Kshetachzeri.mp3',
  },
  {
    trackName: 'גור אדם',
    singer: 'ליאור דולב',
    albumName: 'משכך כאבים',
    src:
      'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Goor_Adam.mp3',
  },
  {
    trackName: 'הלב המשומש',
    singer: 'ליאור דולב',
    albumName: 'משכך כאבים',
    src:
      'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Halev_Hameshumash.mp3',
  },
];

const Music = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [time, setTime] = useState('');
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>();

  const {
    trackName, albumName, singer, src,
  } = audioList[trackIndex];

  const nextTrack = () => {
    if (!autoPlay) {
      setAutoPlay(true);
    }
    if (trackIndex === audioList.length - 1) {
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
      setTrackIndex(audioList.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: trackName,
      artist: singer,
      album: albumName,
      artwork: [
        '96x96',
        '128x128',
        '192x192',
        '256x256',
        '384x384',
        '512x512',
      ].map((size) => ({
        src:
          'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Album_Cover.png',
        sizes: size,
        type: 'image/png',
      })),
    });

    navigator.mediaSession.setActionHandler('nexttrack', nextTrack);

    navigator.mediaSession.setActionHandler('previoustrack', previousTrack);
  }

  const onPlay = () => {
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

  const onVolumeClick = (
    e: React.MouseEvent<HTMLProgressElement, MouseEvent>,
  ) => {
    const percent = (e.clientX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth;

    audioRef.current.volume = percent;
    setVolume(percent);
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

  return (
    <Page className="music">
      <div className="album">
        <img src={AlbumCover} className="cover" alt="משכך כאבים" />
        <div className="track">
          <span className="name">{trackName}</span>
          <span className="extra">{`${singer} / ${albumName}`}</span>
        </div>
        <div className="audio-player">
          <audio
            autoPlay={autoPlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={onTimeUpdate}
            onLoadedData={onTimeUpdate}
            onVolumeChange={() => setVolume(audioRef.current.volume)}
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
            <div className="volume">
              {volume > 0 && (
                <Button
                  onClick={() => setVolume(0)}
                  icon="volume up"
                  size="tiny"
                />
              )}
              {volume === 0 && (
                <Button
                  onClick={() => setVolume(1)}
                  icon="volume off"
                  size="tiny"
                />
              )}
              <progress // eslint-disable-line
                onClick={onVolumeClick}
                value={volume}
                max={1}
                onKeyDown={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Music;
