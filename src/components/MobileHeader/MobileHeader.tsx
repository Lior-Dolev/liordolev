import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Logo, MenuOverlay } from '@components';
import classnames from 'classnames';

type MenuProps = {
  className?: string;
};

const MobileHeader = ({ className }: MenuProps) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const onKeyDown = (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      setIsOverlayVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <>
      <MenuOverlay
        visible={isOverlayVisible}
        onClick={() => setIsOverlayVisible(false)}
      />
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
        <Menu.Item
          as={Link}
          to={'/'}
          className={'logo'}
          onClick={() => setIsOverlayVisible(false)}
        >
          <Logo width={'13.5rem'} height={'3rem'} />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MobileHeader;
