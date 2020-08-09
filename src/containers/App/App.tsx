import React, { Component } from 'react';
import { Menu, Icon, Sidebar, SidebarProps, Segment } from 'semantic-ui-react';
import { Logo, Header } from '@components';
import classnames from 'classnames';

type MenuProps = {
  openMenu: () => void;
};

const MyMenu = ({ openMenu }: MenuProps) => (
  <Menu as={'header'} inverted>
    <Menu.Item as={'nav'} onClick={() => openMenu()}>
      <Icon name={'bars'} />
    </Menu.Item>
    <Menu.Item as={'nav'} position={'left'} className={'logo'}>
      <Logo width={'13.5rem'} height={'3rem'} />
    </Menu.Item>
  </Menu>
);

const HorizontalSidebar = ({
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
    <div>menu</div>
  </Sidebar>
);

export default class App extends Component<{}, { show: boolean }> {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    const overlayClassName = classnames('nav-overlay', {
      show: this.state.show,
      'anim-nav-overlay': this.state.show,
    });

    return (
      <div className={'ld-app'}>
        <HorizontalSidebar visible={this.state.show} />
        <Header>
          <MyMenu openMenu={() => this.setState({ show: !this.state.show })} />
        </Header>
        {/* <div className={overlayClassName}></div> */}
        <div>page</div>
      </div>
    );
  }
}
