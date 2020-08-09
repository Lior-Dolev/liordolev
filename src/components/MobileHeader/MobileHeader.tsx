import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Logo, MenuOverlay } from '@components';
import classnames from 'classnames';

type MenuProps = {
  className?: string;
};

const MobileHeader = ({ className }: MenuProps) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <>
      <MenuOverlay visible={isOverlayVisible} />
      <Menu
        className={classnames('header mobile', className)}
        as={'header'}
        inverted
        fixed={'top'}
      >
        <Menu.Item
          as={'nav'}
          onClick={() => setIsOverlayVisible(!isOverlayVisible)}
        >
          <Icon name={'bars'} />
        </Menu.Item>
        <Menu.Item as={'nav'} className={'logo'}>
          <Logo width={'13.5rem'} height={'3rem'} />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MobileHeader;
