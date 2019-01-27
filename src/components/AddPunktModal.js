import React from 'react';
import ReactModal from 'react-modal';
var moment = require('moment');



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex: 999
  }
};
class AddPunktModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      punkt: {
        nazwaPunktu: '',
        wysokosc: '',
        wysokoscGeograficzna: '',
        szerokoscGeograficzna: '',
        grupaGorska: {}
      }
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount()
  {
    this.setState({
      modalIsOpen: this.props.isModalOpen,
      selectedId: this.props.selectedId
    })
  }
  componentWillReceiveProps(props) {
    console.log('new props')
    this.setState({
      modalIsOpen: props.isModalOpen,
      selectedId: props.selectedId,
      punkt: {
        ...this.state.punkt,
        grupaGorska: this.props.grupa
      }
    })
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000';
    this.message.style.color='#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
        return {
          punkt: {
            ...prevState.punkt, [name]: value
          }
        }
      }, () => console.log(this.state.punkt)
    )
  }

  createPunkt()
  {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(this.state.punkt),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:8080/punkt', requestOptions).then((response) => {
      if (response.status >= 400) {
        console.log('problem z POSTem punktu');
        console.log(this.state.punkt);
        throw new Error('Bad response from server');
      }
    }).then(() => {
      this.props.addPunkt(this.state.punkt);
      this.closeModal();
    });
  }




  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Dodaj nowy punkt</h2>

          <p ref={message => this.message = message }>Podaj dane punktu</p>
          <form className="punkt">
            <label>Podaj nazwę punktu</label>
            <input onChange={this.handleInput.bind(this)} required type="text"  name="nazwaPunktu"/>
            <label>Podaj wyskość npm></label>
            <input onChange={this.handleInput.bind(this)} required min="0" type="number" name="wysokosc"/>
            <label>Podaj długość geo</label>
            <input onChange={this.handleInput.bind(this)} required  min="-90" max="90" type="number" step="0.001" name="wysokoscGeograficzna"/>
            <label>Podaj szerokość geo></label>
            <input onChange={this.handleInput.bind(this)} required type="number" min="-180" max="180" step="0.001" name="szerokoscGeograficzna"/>
            <button  type="button" onClick={(() => {
              let form = document.querySelector('form.punkt');
              console.log(form);
              if (form.checkValidity()) {
                //this.createPunkt();
                this.props.addPunkt(this.state.punkt);
                this.closeModal();
              } else
              {
                form.reportValidity();
              }

            }).bind(this)}>Potwierdz</button>
            <button type="button" onClick={ () => {this.closeModal(); this.props.onClose(); }}>Anuluj</button>
          </form>
        </ReactModal>
      </div>
    );
  }

}
export default AddPunktModal
