import React from 'react';
import { NavBar, Logo, Menu } from './index.style';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Header = props => {
  const {
    location: { pathname }
  } = props;
  const paths = [
    '/',
    '/levels',
    '/resources',
    '/questionnaire',
    '/sensory-training',
    '/sensory-introduction',
    '/sensory-topics',
    '/sensory-equipment',
    '/fine-motor-skills',
    '/pencil-grip-reviews',
    '/schema',
    '/about-us',
    '/introductory-videos',
    '/books',
    '/contact'
  ];
  return paths.includes(pathname) ? (
    <>
      <NavBar>
        <a href='/'>
          <Logo alt='logo' src={logo} />
        </a>
        <a href='/menu'>
          <Menu alt='menu' src={menu} {...props} />
        </a>
      </NavBar>
    </>
  ) : null;
};

export default Header;
