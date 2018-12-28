/**
 * Created by Cinek on 28.12.2018.
 */
import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdBuild } from "react-icons/md";


class Trasy extends React.Component {

  getNazwa(trasa) {
    let nazwa='';
    trasa.skladowePunktyTrasy.forEach(function (punkt) {
       nazwa+=punkt.punktTrasy.nazwaPunktu+' ';
    })
    return nazwa;
  }

  render() {
    return (
    <ul className="collection">
      {this.props.trasy.map(trasa => {
        return (
          <li className="collection-item trasaItem">
            <span>Id: {trasa.id}  </span>
            <span>Nazwa: {this.getNazwa(trasa)}  </span>
            <span>Grupa: {trasa.grupaGorska.nazwaGrupy}  </span>
            <span>Pkt: {trasa.liczbaPunktow} </span>
            <a href="#"><span className="icon"><MdBuild/> Edytuj </span></a>
            <a href="#"><span className="icon"><MdDelete/> Usuń </span></a>

          </li>
        )
      })
      }
    </ul>
    );
  }
}

export default Trasy;
