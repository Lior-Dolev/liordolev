import React from 'react';
import { Sidebar, SidebarProps, Segment, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuOverlay = ({
  animation = 'overlay',
  direction = 'top',
  visible,
  onClick,
  tabIndex,
}: SidebarProps) => (
  <Sidebar
    as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}
  >
    <div className={'nav-wrapper'}>
      <Menu as={'nav'}>
        <Menu.Item tabIndex={tabIndex} onClick={onClick} as={Link} to={'/'}>
          בית
        </Menu.Item>
        <Menu.Item
          tabIndex={tabIndex}
          onClick={onClick}
          as={Link}
          to={'/music'}
        >
          מוזיקה
        </Menu.Item>
        <Menu.Item tabIndex={tabIndex} onClick={onClick} as={Link} to={'/tour'}>
          הופעות
        </Menu.Item>
        <Menu.Item>חנות (בקרוב)</Menu.Item>
        <Menu.Item
          tabIndex={tabIndex}
          onClick={onClick}
          as={Link}
          to={'/about'}
        >
          אודות
        </Menu.Item>
        <Menu.Item
          tabIndex={tabIndex}
          onClick={onClick}
          as={Link}
          to={'/contact'}
        >
          צרו קשר
        </Menu.Item>
      </Menu>
    </div>
  </Sidebar>
);

export default MenuOverlay;
