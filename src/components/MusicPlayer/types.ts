import * as Albums from './Albums';

export type AudioTrack = {
  title: string;
  artist: string;
  src: string;
  duration: string;
};

export type AlbumName = keyof typeof Albums;

export type MusicPlayerProps = {
  albumName: AlbumName;
};

export type AlbumCoverProps = {
  src: string;
  alt: string;
};

export type TracksListProps = {
  tracks: AudioTrack[];
  activeTrack?: number;
  onTrackClick: (trackIndex: number) => void;
};
