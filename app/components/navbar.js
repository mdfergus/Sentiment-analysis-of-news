import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon, SideNav, SideNavItem } from 'react-materialize';

class navbar extends Component {
  render() {
    return (
      <SideNav
        trigger={
          <a>
            <Icon>more_vert</Icon>
          </a>
        }
        options={{ closeOnClick: true }}
      >
        <SideNavItem
          userView
          user={{
            background: 'img/office.jpg',
            image: 'img/yuna.jpg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
      </SideNav>
    );
  }
}

export default navbar;
