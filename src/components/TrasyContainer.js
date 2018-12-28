/**
 * Created by Cinek on 28.12.2018.
 */
require('isomorphic-fetch');
import React from 'react';
import Trasy from './Trasy';

class TrasyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trasyPunktowane: [] };
  }

  componentDidMount() {
    console.log('chuj');
    this.fetchTrasy();
  }
  fetchTrasy() {
    fetch('http://localhost:8080/trasa/punktowana')
      .then(response => {
        if (response.status >= 400) {
          console.log('problem z wczytywaniem');
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(trasy => {
        console.log(trasy)
        this.setState({ trasyPunktowane: trasy });
      });
  }
  render() {
    return (
      <div>
        <div className="input-field">
          <input placeholder="Szukaj..." id="search" type="text" class="validate"/>
        </div>
        <div>
          <Trasy trasy={this.state.trasyPunktowane}/>
        </div>
      </div>

    );
  }
}

export default TrasyContainer;
