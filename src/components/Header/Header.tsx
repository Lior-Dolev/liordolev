import React from 'react';

type HeaderProps = {
  children: any;
};

const Header = ({ children }: HeaderProps) => (
  <header className={'header'}>{children}</header>
);

export default Header;
