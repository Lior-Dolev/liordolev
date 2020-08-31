import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Instagram, Facebook, Spotify, Apple, Youtube } from './links';
import { SocialNavProps, SocialLink } from './types';

const Link = ({ href, iconName, tabIndex }: SocialLink) => (
  <a className={'link'} href={href} target="_blank" tabIndex={tabIndex}>
    <Icon name={iconName} />
  </a>
);

const SocialNav = (props: SocialNavProps) => (
  <nav className={'social'}>
    <Link {...Instagram} {...props} />
    <Link {...Facebook} {...props} />
    <Link {...Spotify} {...props} />
    <Link {...Apple} {...props} />
    <Link {...Youtube} {...props} />
  </nav>
);

export default SocialNav;
