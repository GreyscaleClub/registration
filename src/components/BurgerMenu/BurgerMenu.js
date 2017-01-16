import React from 'react';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Menu = require('react-burger-menu').slide;

class BurgerMenu extends React.Component {
  render() {
    console.log(styles);
    return (
      <Menu styles={ styles }>
        <a id="Home" className="menu-item" href="/">Home</a>
        <a id="Information" className="menu-item" href="/">Information</a>
        <a id="Register" className="menu-item" href="/">Register</a>
      </Menu>
    );
  }
}

export default BurgerMenu;
