/**
 * Created by Cinek on 29.12.2018.
 */
import React from 'react';
import {FILTER_TYPES} from './FilterType';



class FilterTypeSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = { options: [FILTER_TYPES.NONE, FILTER_TYPES.DATA_DODANIA, FILTER_TYPES.DATA_USUNIECIA, FILTER_TYPES.NAZWA, FILTER_TYPES.ID]
      , currentFilter: FILTER_TYPES.NONE  };
  }



  render() {
    return (
        <div className="col s2" >
          <select className="browser-default filterTypeSelect">
            <option disabled selected>Wybierz kryterium filtrowania...</option>
            {
              this.state.options.map(option => {
                return (
                  <option value={option}>{option}</option>
                )
              })
            }
          </select>

        </div>
    );
  }
}

export default FilterTypeSelect;
