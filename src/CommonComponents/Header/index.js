import React from 'react';
import { Redirect } from 'react-router-dom';
import { NavBar, Logo, Menu } from './index.style';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';


class Header extends React.Component {
  state = {
    redirectBtn: false,
  }

  setRedirect = () => {
    this.setState({
      redirectBtn: true
    })
  }

  renderBtn = () => {
    if (this.state.redirectBtn) {
      return <Redirect to='/menu' />
    }
  }

  render() {
    return (
      <>
        <NavBar>
          <Logo alt="logo" src={logo} />
          {this.renderBtn()}
          <Menu onClick={this.setRedirect} alt="menu" src={menu} />
        </NavBar>
      </>
    )
  }
}

export default Header;
