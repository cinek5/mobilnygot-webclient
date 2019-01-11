/**
 * Created by Cinek on 29.12.2018.
 */
import React from 'react';


class GrupaGorskaSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = { options: [{id: 1, nazwaGrupy:'T.01 Tatry Wysokie'}, {id:2, nazwaGrupy: 'T.02 Tatry Zachodnie' }], enabled: this.props.enabled };
  }

  fetchGrupyGorskie() {

  }
  componentWillReceiveProps()
  {
    console.log("nowy stan: "+this.props.enabled);
    this.setState({
      ...this.state,
      enabled: this.props.enabled
    });
  }



  render() {
    return (
        <select disabled={!this.state.enabled} required  name={'grupaGorska'} value={this.props.value} onChange={this.props.handleChange} className="browser-default filterTypeSelect">
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

export default GrupaGorskaSelect;
