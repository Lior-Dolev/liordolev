import React from 'react';
import { Sidebar, SidebarProps, Segment, Menu } from 'semantic-ui-react';

const MenuOverlay = ({
  animation = 'overlay',
  direction = 'top',
  visible,
}: SidebarProps) => (
  <Sidebar
    as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}
  >
    <div className={'nav-wrapper'}>
      <Menu as={'nav'}>
        <Menu.Item>בית</Menu.Item>
        <Menu.Item>מוזיקה</Menu.Item>
        <Menu.Item>הופעות</Menu.Item>
        <Menu.Item>מכתב ממני</Menu.Item>
        <Menu.Item>אודות</Menu.Item>
        <Menu.Item>צרו קשר</Menu.Item>
      </Menu>
    </div>
  </Sidebar>
);

export default MenuOverlay;
