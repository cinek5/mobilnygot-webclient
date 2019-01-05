/**
 * Created by Cinek on 28.12.2018.
 */
import React from 'react';
const customStyle = {
  fontSize: '1rem'
}
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
          </thead>
          <tbody>
          {this.props.punkty.map(punkt => {
            return (
              <tr>
                <td>{punkt.punktTrasy.nazwaPunktu}</td>
                <td>{punkt.punktTrasy.wysokosc}  </td>
                <td>{punkt.punktTrasy.szerokoscGeograficzna}  </td>
                <td>{punkt.punktTrasy.wysokoscGeograficzna}</td>
                <td>{punkt.kolejnoscPunktu}</td>
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
