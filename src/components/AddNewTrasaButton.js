/**
 * Created by Cinek on 27.12.2018.
 */
/**
 * Created by Cinek on 27.12.2018.
 */
import React from 'react';
import {
  Link
} from 'react-router-dom';
class AddNewTrasaButton extends React.Component {
  render() {
    return (
      <Link to="/addNewTrasa"> <a className="waves-effect waves-light btn addNewTrasa">Dodaj nowa trase</a></Link>
    );
  }
}

export default AddNewTrasaButton;
