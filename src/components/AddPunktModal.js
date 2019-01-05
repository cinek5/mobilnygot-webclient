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
        id: '',
        nazwa: '',
        wysokosc: '',
        wysokoscGeograficzna: '',
        szerokoscGeograficzna: ''
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
      selectedId: props.selectedId
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
          <form>
            <label>Podaj nazwę punktu</label>
            <input onChange={this.handleInput.bind(this)} type="text" name="nazwaPunktu"/>
            <label>Podaj wyskość npm></label>
            <input onChange={this.handleInput.bind(this)} type="number" name="wysokosc"/>
            <label>Podaj wysokość geo</label>
            <input onChange={this.handleInput.bind(this)} type="number" name="wysokoscGeograficzna"/>
            <label>Podaj szerokość geo></label>
            <input onChange={this.handleInput.bind(this)} type="number" name="szerokoscGeograficzna"/>
            <button  type="button" onClick={(() => {
              this.props.addPunkt(this.state.punkt);
              this.closeModal();
            }).bind(this)}>Potwierdz</button>
            <button type="button" onClick={this.closeModal}>Anuluj</button>
          </form>
        </ReactModal>
      </div>
    );
  }

}
export default AddPunktModal
