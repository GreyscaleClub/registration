import React from 'react';
import ReactDOM from 'react-dom';

import BurgerMenu from './components/BurgerMenu/BurgerMenu.js';

class App extends React.Component {
    render() {
        return (
            <div>
              <BurgerMenu />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
