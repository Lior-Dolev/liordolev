import React from 'react';
import classnames from 'classnames';
import { Icon } from 'semantic-ui-react';
import { TracksListProps } from './types';

const TracksList = ({ tracks, onTrackClick, activeTrack }: TracksListProps) => (
  <div className="track-list">
    {tracks.map(({ title: trackName, duration }, i) => (
      // eslint-disable-next-line
      <div
        key={trackName}
        className={classnames('track', {
          active: i === activeTrack,
        })}
        onClick={() => onTrackClick(i)}
      >
        <span className="number">
          <span className="text">{i + 1}</span>
          <Icon name="play" />
        </span>
        <span className="name">{trackName}</span>
        <span className="duration">{duration}</span>
      </div>
    ))}
  </div>
);

export default TracksList;
