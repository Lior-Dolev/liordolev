import React from 'react';
import { AlbumCoverProps } from './types';

const AlbumCover = ({ src, alt }: AlbumCoverProps) => (
  <img src={src} className="cover" alt={alt} />
);

export default AlbumCover;
