import React from 'react';
import PropTypes from 'prop-types';
import {
  NavBar, Logo, Menu, LogoMenuLink,
} from './index.style';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Header = (props) => {
  const {
    location: { pathname },
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
    '/contact',
  ];
  return paths.includes(pathname) ? (
    <>
      <NavBar>
        <LogoMenuLink to="/">
          <Logo alt="logo" src={logo} />
        </LogoMenuLink>
        <LogoMenuLink to="/menu">
          <Menu alt="menu" src={menu} {...props} />
        </LogoMenuLink>
      </NavBar>
    </>
  ) : null;
};

Header.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Header;
