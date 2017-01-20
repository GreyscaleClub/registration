import React from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.js';
import GreyForm from './components/Form/GreyForm.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <GreyForm />
        <BurgerMenu />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
