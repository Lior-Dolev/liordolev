export type AudioTrack = {
  title: string;
  artist: string;
  src: string;
  duration: string;
};

export type Album = {
  title: string;
  tracks: AudioTrack[];
  artist: string;
  artworkSrc: string;
};

export const MESHAKECH_KEEVIM: Album = {
  title: 'משכך כאבים',
  artist: 'ליאור דולב',
  artworkSrc:
    'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Album_Cover.jpg',
  tracks: [
    {
      title: 'משכך כאבים',
      artist: 'ליאור דולב',
      duration: '4:00',
      src:
        'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Meshakech_Keevim.mp3',
    },
    {
      title: 'כשתחזרי',
      artist: 'ליאור דולב',
      duration: '3:40',
      src:
        'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Kshetachzeri.mp3',
    },
    {
      title: 'גור אדם',
      artist: 'ליאור דולב',
      duration: '2:53',
      src:
        'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Goor_Adam.mp3',
    },
    {
      title: 'הלב המשומש',
      artist: 'ליאור דולב',
      duration: '2:47',
      src:
        'https://s3.eu-central-1.amazonaws.com/liordolev.com/music/Halev_Hameshumash.mp3',
    },
  ],
};
