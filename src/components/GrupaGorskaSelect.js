/**
 * Created by Cinek on 29.12.2018.
 */
import React from 'react';


class FilterTypeSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = { options: [{id: 1, nazwaGrupy:'Tatry'}, {id:2, nazwaGrupy: 'Karkonosze' }] };
  }

  fetchGrupyGorskie() {

  }



  render() {
    return (
<<<<<<< HEAD
        <select  required  name={'grupaGorska'} value={this.props.value} onChange={this.props.handleChange} className="browser-default filterTypeSelect">
=======
        <select name={'grupaGorska'} value={this.props.value} onChange={this.props.handleChange} className="browser-default filterTypeSelect">
>>>>>>> 6e020f4f3c5c78d4c0873991179eafb21b82f704
          <option disabled selected >Wybierz grupę górską... </option>
          {
            this.state.options.map(option => {
              return (
                <option value={JSON.stringify(option)}>{option.nazwaGrupy}</option>
              )
            })
          }
        </select>
    );
  }
}

export default FilterTypeSelect;
