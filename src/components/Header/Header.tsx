import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Logo } from '@components';
import classnames from 'classnames';

type HeaderProps = MenuProps & {};

type MenuProps = {
  openMenu: () => void;
  className?: string;
};

const MobileHeader = ({ openMenu, className }: MenuProps) => (
  <Menu className={classnames(className)} as={'header'} inverted>
    <Menu.Item as={'nav'} onClick={() => openMenu()}>
      <Icon name={'bars'} />
    </Menu.Item>
    <Menu.Item as={'nav'} position={'left'} className={'logo'}>
      <Logo width={'13.5rem'} height={'3rem'} />
    </Menu.Item>
  </Menu>
);

const Header = (props: HeaderProps) => (
  <MobileHeader className={'header'} {...props} />
);

export default Header;
