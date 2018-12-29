require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Navbar from './Navbar'
import SearchBar from './SearchBar';
import AddNewTrasaButton from './AddNewTrasaButton';
import TrasyContainer from './TrasyContainer';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <Navbar/>
        <div className="row">
          <div className="col s8">
            <TrasyContainer/>
          </div>
          <div className="col s1"></div>
          <div className="col s3">
            <AddNewTrasaButton/>
          </div>


        </div>
      </div>
    );
  }
}

export default AppComponent;
