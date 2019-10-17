import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  NavBar, LogoBtn, Logo, Menu, MenuLink,
} from './index.style';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';


const Header = () => (
  <>
    <NavBar>
      <LogoBtn href="/"><Logo alt="logo" src={logo} /></LogoBtn>
      <MenuLink href="/menu"><Menu alt="menu" src={menu} /></MenuLink>
    </NavBar>
  </>
);

export default Header;
