/**
 * Created by Cinek on 28.12.2018.
 */
import React from 'react';


const errorsStyle={
  padding: '20px',
  backgroundColor: '#f44336', /* Red */
  color: 'white',
  marginBottom: '15px',
  bottom: '10%',
  right: '10%',
  width: '40%',
  position: 'fixed',
  borderRadius: '25px',
  transition: 'visibility 2s linear 300ms'
}

class Errors extends React.Component {


  render() {
    return (
      <div style={errorsStyle} hidden={this.props.errors.length==0}>
        {this.props.errors.map(error=> {
          return (
            <p>{error.error}</p>
          )
        })}
      </div>
    );
  }
}

export default Errors;
