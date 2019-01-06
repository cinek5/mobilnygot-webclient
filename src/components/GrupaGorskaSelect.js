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
        <select  required  name={'grupaGorska'} value={this.props.value} onChange={this.props.handleChange} className="browser-default filterTypeSelect">
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
