var moment = require('moment');
import React from 'react';
import {MdDelete} from "react-icons/md";
import {MdBuild} from "react-icons/md";
import GrupaGorskaSelect from './GrupaGorskaSelect';
import ListaPunktow from './ListaPunktow';
import AddPunktModal from './AddPunktModal';


class TrasaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGrupa: '',
      isAddPunktModalOpen: false,
      trasa: {
        type: 'TrasaPunktowana',
        id: '',
        skladowePunktyTrasy: [
          {
            punktTrasy: {
              id: 5,
              nazwaPunktu: 'Gospoda Jana',
              wysokosc: 200,
              wysokoscGeograficzna: 40,
              szerokoscGeograficzna: 30,
            },
            kolejnoscPunktu: 1
          },
          {
            punktTrasy: {
              id: 6,
              nazwaPunktu: 'Pastwisko Owiec',
              wysokosc: 240,
              wysokoscGeograficzna: 43,
              szerokoscGeograficzna: 35,
            },
            kolejnoscPunktu: 2
          }
        ],
        grupaGorska: {
          id: '',
          nazwaGrupy: ''
        },
        nazwa: '',
        liczbaPunktow: 0,
        dataDodania: '',
        dataUsuniecia: '',
        poprzedniaWersjaId: ''

      },


    };
  }


  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    if (name == 'dataDodania') {
      value = moment(value).format('YYYY-MM-DD');
    }
    this.setState(prevState => {
        return {
          trasa: {
            ...prevState.trasa, [name]: value
          }
        }
      }, () => console.log(this.state.trasa)
    )
  }

  handleJsonInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    console.log(name);
    console.log(this.state.trasa['type']);
    this.setState(prevState => {
        return {
          trasa: {
            ...prevState.trasa, [name]: JSON.parse(value)
          }
        }
      }, () => console.log(this.state.trasa)
    )
  }
  onAddPunktClick() {
    this.setState({
      ...this.state,
      isAddPunktModalOpen: true
    }, () => console.log(this.state));
  }
  addNewPunkt(newPunkt) {
    let countPunkty = this.state.trasa.skladowePunktyTrasy.length;
    let newSkladowePunktyTrasy= this.state.trasa.skladowePunktyTrasy;
    newSkladowePunktyTrasy.push({punktTrasy: newPunkt, kolejnoscPunktu: countPunkty+1});
    this.setState({
      ...this.state,
      trasa: {
        ...this.state.trasa,
        skladowePunktyTrasy: newSkladowePunktyTrasy
      }
    });
    this.closeModal();

  }
  closeModal()
  {
    this.setState({
      ...this.state,
      isAddPunktModalOpen: false
    })
  }



  render() {
    return (
      <div>
        <h2 style={ {marginLeft: '10%'}}>Dodaj trasę</h2>
        <AddPunktModal addPunkt={this.addNewPunkt.bind(this)} isModalOpen={this.state.isAddPunktModalOpen}/>
        <div className="row">
          <div className="col s2"></div>
          <form className="col s10">
            <div className="row">
              <div className="input field col s6 ">
                <label className="white-text">Nazwa trasy </label>
                <input placeholder="Podaj nazwę trasy" name="nazwa" className="white-text"
                       onChange={this.handleInput.bind(this)} type="text"/>
                <ListaPunktow punkty={this.state.trasa.skladowePunktyTrasy}/>
                <button style= { {marginTop: '30px'} } type="button" onClick={this.onAddPunktClick.bind(this)} className="btn" >Dodaj nowy punkt trasy</button>
              </div>
              <div className="col s4">
                <label className="white-text">Grupa górska</label>
                <GrupaGorskaSelect handleChange={this.handleJsonInput.bind(this)}/>

                <label className="white-text">Data wprowadzenia trasy</label>
                <input name="dataDodania" className="white-text" onChange={this.handleInput.bind(this)} type="date"/>

                <div className="input field">
                  <label className="white-text">Liczba punktów do zdobycia</label>
                  <input name="liczbaPunktow" onChange={this.handleInput.bind(this)} className="white-text"
                         type="number"/>
                </div>
              </div>
            </div>
            <button style={{marginTop: '50px'}} type="button" className="btn">Zatwierdz
            </button>
          </form>

        </div>
      </div>
    );
  }
}

export default TrasaForm;
