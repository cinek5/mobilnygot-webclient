require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TrasyPunktowane from './TrasyPunktowane';
import AddNewTrasa from './AddNewTrasa';

class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={TrasyPunktowane} />
          <Route exact path="/addNewTrasa" component={AddNewTrasa}/>
        </div>
      </Router>
    );
  }
}

export default AppComponent;
