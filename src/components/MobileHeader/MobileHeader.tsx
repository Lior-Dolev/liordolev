import React, { useState, useEffect } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Logo, MenuOverlay } from '@components';
import classnames from 'classnames';

type MenuProps = {
  className?: string;
  onOpenModal: () => void;
  onCloseModal: () => void;
  tabIndex?: number;
};

const MobileHeader = ({
  className,
  onOpenModal,
  onCloseModal,
  tabIndex,
}: MenuProps) => {
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

  useEffect(() => {
    if (isOverlayVisible) {
      onOpenModal();
    } else {
      onCloseModal();
    }
  }, [isOverlayVisible]);

  return (
    <>
      <Menu
        className={classnames('header mobile', className)}
        as={'header'}
        inverted
        fixed={'top'}
      >
        <Menu.Item
          as={Button}
          onClick={() => setIsOverlayVisible(!isOverlayVisible)}
          tabIndex={tabIndex}
        >
          <Icon tabIndex={'-1'} name={'bars'} />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={'/'}
          className={'logo'}
          onClick={() => setIsOverlayVisible(false)}
          tabIndex={tabIndex}
        >
          <Logo width={'13.5rem'} height={'3rem'} />
        </Menu.Item>
      </Menu>
      <MenuOverlay
        visible={isOverlayVisible}
        onClick={() => setIsOverlayVisible(false)}
        tabIndex={tabIndex}
      />
    </>
  );
};

export default MobileHeader;
