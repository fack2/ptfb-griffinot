import React from 'react';
import {
  NavBar, Logo, Menu, LinkImage,
} from './index.style';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Header = (props) => (
  <>
    <NavBar>
      <Logo alt="logo" src={logo} />

      <LinkImage href="/menu">
        <Menu alt="menu" src={menu} {...props} />
      </LinkImage>
    </NavBar>
  </>
);

export default Header;
