import React from 'react';
import { NavBar, Logo, Menu } from './index.style';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';


const Header = () => (
  <>
    <NavBar>
      <Logo alt="logo" src={logo} />
      <Menu alt="menu" src={menu} />
    </NavBar>
  </>
);

export default Header;
