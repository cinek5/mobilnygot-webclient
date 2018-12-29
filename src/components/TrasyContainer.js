/**
 * Created by Cinek on 28.12.2018.
 */
require('isomorphic-fetch');
import React from 'react';
import Trasy from './Trasy';
import {FILTER_TYPES} from './FilterType';
import FilterTypeSelect from './FilterTypeSelect';

class TrasyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trasyPunktowane: [], currentFilter: FILTER_TYPES.NONE };
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

  getFilteredTrasy()
  {
    if (this.state.currentFilter==FILTER_TYPES.NONE) {
      return this.state.trasyPunktowane;
    }
  }
  changeFilterType(filterType)
  {
    this.setState({...this.state, currentFilter: filterType});
  }

  render() {
    return (
      <div>
        <div className="input-field col s10">
          <input placeholder="Szukaj..." id="search" type="text" className="validate"/>
        </div>
        <FilterTypeSelect/>
        <div>
          <Trasy trasy={this.getFilteredTrasy()}/>
        </div>
      </div>

    );
  }
}

export default TrasyContainer;
