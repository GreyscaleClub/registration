import React from 'react';
import ReactDOM from 'react-dom';

import BurgerMenu from './components/BurgerMenu/BurgerMenu.js';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.js'

class App extends React.Component {
  render() {
    return (
      <div id="outer-container" style={{ height: '100%' }}>
        <BurgerMenu />
        <main>
          <RegistrationForm />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
