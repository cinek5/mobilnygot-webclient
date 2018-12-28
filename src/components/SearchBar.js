/**
 * Created by Cinek on 27.12.2018.
 */
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div class="input-field col s6 teal lighten-2">
        <input placeholder="Szukaj..." id="search" type="text" class="validate"/>
      </div>
    );
  }
}

export default SearchBar;
