import React from 'react';

const Menu = require('react-burger-menu').slide;

class BurgerMenu extends React.Component {
  render() {
    return (
      <Menu>
        <a id="Home" className="menu-item" href="http://greyscale.club/">
          <i className="fa fa-fw fa-home" /><span>Home</span>
        </a>
        <a id="Information" className="menu-item" href="/">
          <i className="fa fa-fw fa-info" /><span>Information</span>
        </a>
        <a id="Register" className="menu-item" href="/">
          <i className="fa fa-fw fa-user" /><span>Register</span>
        </a>
      </Menu>
    );
  }
}

export default BurgerMenu;
