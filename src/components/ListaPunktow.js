/**
 * Created by Cinek on 28.12.2018.
 */
import React from 'react';
const customStyle = {
  fontSize: '1rem'
}
const buttonStyle={
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: '0',
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
}
import { MdDelete, MdExpandLess, MdExpandMore } from "react-icons/md";

class ListaPunktow extends React.Component {
  render() {
    return (
      <div>
        <h5 className="white-text">Składowe punkty</h5>
        <table style={customStyle}>
          <thead>
            <th>Nazwa</th>
            <th>Wysokosc</th>
            <th>Szerokosc geo.</th>
            <th>Wysokosc geo.</th>
            <th>Kolejnosc</th>
            <th></th>
          </thead>
          <tbody>
          {this.props.punkty.map((punkt,index) => {
            return (
              <tr>
                <td>{punkt.punktTrasy.nazwaPunktu}</td>
                <td>{punkt.punktTrasy.wysokosc}  </td>
                <td>{punkt.punktTrasy.szerokoscGeograficzna}  </td>
                <td>{punkt.punktTrasy.wysokoscGeograficzna}</td>
                <td>{punkt.kolejnoscPunktu}</td>
                <td>
                  <a href="#" onClick={()=>this.props.onDeleteClick(0)}><span className="icon white-text"><MdDelete/> Usuń </span></a>
                  <button style={buttonStyle} onClick={()=>{this.props.changeOrder(index,'up')}} type="button"><span className="icon white-text"><MdExpandLess/></span></button>
                  <button style={buttonStyle} onClick={()=>{this.props.changeOrder(index,'down')}} type="button"><span className="icon white-text"><MdExpandMore/></span></button>
                </td>
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

export default ListaPunktow;
