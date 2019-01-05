/**
 * Created by Cinek on 28.12.2018.
 */
require('isomorphic-fetch');
import React from 'react';
import Trasy from './Trasy';
import {FILTER_TYPES} from './FilterType';
import FilterTypeSelect from './FilterTypeSelect';
import DeleteTrasaModal from './DeleteTrasaModal';

class TrasyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trasyPunktowane: [], currentFilter: FILTER_TYPES.NONE, isModalOpen: false, selectedTrasaId: -1};
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

  deleteTrasa(idTrasy, dataUsuniecia)
  {
    const requestOptions = {
      method: 'DELETE'
    };

    fetch('http://localhost:8080/trasa/punktowana/' + idTrasy + '?dataUsuniecia='+dataUsuniecia, requestOptions).then((response) => {
      if (response.status >= 400) {
        console.log('problem z usuwaniem');
        throw new Error('Bad response from server');
      }
    }).then(() => {
        let trasa = this.state.trasyPunktowane.find((trasa)=>trasa.id==idTrasy);
        trasa.dataUsuniecia=dataUsuniecia;
        this.state.isModalOpen=false;
        this.forceUpdate();
    });
  }
  onDeleteClick(trasaId)
  {
    this.setState({
      ...this.state,
      isModalOpen:true,
      selectedTrasaId: trasaId
    }, () => console.log(this.state.selectedTrasaId+' '+this.state.isModalOpen))
  }
  setModalOpen(isOpen)
  {
    this.setState({
      ...this.state, isModalOpen:isOpen
    })
  }

  render() {
    return (
      <div>
        <div className="input-field col s10">
          <input placeholder="Szukaj..." id="search" type="text" className="validate"/>
        </div>
        <FilterTypeSelect/>
        <div>
          <Trasy onDeleteClick={this.onDeleteClick.bind(this)} trasy={this.getFilteredTrasy()}/>
          <DeleteTrasaModal deleteTrasa={this.deleteTrasa.bind(this)} isModalOpen={this.state.isModalOpen} selectedId={this.state.selectedTrasaId} />
        </div>
      </div>

    );
  }
}

export default TrasyContainer;
