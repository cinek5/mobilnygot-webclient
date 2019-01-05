import React from 'react';
import TrasaForm from './TrasaForm';
class AddNewTrasa extends React.Component {
  render() {
    return (
      <div className="main">
        <TrasaForm history={this.context.history}/>
      </div>
    );
  }
}

export default AddNewTrasa;
