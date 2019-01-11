/**
 * Created by Cinek on 28.12.2018.
 */
import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdBuild } from "react-icons/md";

const buttonStyle={
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: '0',
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
}

class Trasy extends React.Component {

  getPunkty(trasa) {
    let punkty='';
    trasa.skladowePunktyTrasy.forEach(function (punkt) {
       punkty+=punkt.punktTrasy.nazwaPunktu+' ';
    })
    return punkty;
  }

  render() {
    return (
    <div>
      <table className="teal lighten-2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nazwa</th>
            <th>Punkty </th>
            <th>Grupa </th>
            <th>Pkt. odznaki</th>
            <th>Data dodania</th>
            <th>Data usunięcia</th>
            <th>Id poprzedniej wersji</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {this.props.trasy.map(trasa => {
          return (
            <tr>
              <td>{trasa.id}</td>
              <td>{trasa.nazwa}</td>
              <td>{this.getPunkty(trasa)}  </td>
              <td>{trasa.grupaGorska.nazwaGrupy}  </td>
              <td>{trasa.punktyRegulaminowe} </td>
              <td>{trasa.dataDodania} </td>
              <td>{trasa.dataUsuniecia} </td>
              <td>{trasa.poprzedniaWersjaId}</td>
              <td><button style={buttonStyle} href="#"><span className="icon"><MdBuild/> Edytuj </span></button></td>
              <td><button style={buttonStyle} hidden={trasa.dataUsuniecia!=undefined} onClick={()=>this.props.onDeleteClick(trasa.id)}><span className="icon"><MdDelete/> Usuń </span></button></td>

            </tr>
          )
        })
        }
        </tbody>
      </table>

    </div>
    );
  }
}

export default Trasy;
