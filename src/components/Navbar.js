/**
 * Created by Cinek on 27.12.2018.
 */
import React from 'react';

class NavbarComponent extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <a href="#" className="brand-logo">Panel administratora</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Strona domowa</a></li>
            <li className="active"><a href="#">Trasy Punktowane</a></li>
            <li><a href="#">Punkty trasy</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
