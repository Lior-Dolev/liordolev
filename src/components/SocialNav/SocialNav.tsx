import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Instagram, Facebook, Spotify, Apple, Youtube } from './links';
import { SocialLink } from './types';

const Link = ({ href, iconName }: SocialLink) => (
  <a className={'link'} href={href} target="_blank">
    <Icon name={iconName} />
  </a>
);

const SocialNav = () => (
  <nav className={'social'}>
    <Link {...Instagram} />
    <Link {...Facebook} />
    <Link {...Spotify} />
    <Link {...Apple} />
    <Link {...Youtube} />
  </nav>
);

export default SocialNav;
