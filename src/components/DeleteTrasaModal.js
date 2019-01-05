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
    transform             : 'translate(-50%, -50%)'
  }
};

class DeleteTrasaModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      selectedId: -1
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
    this.subtitle.style.color = '#f00';
    this.message.style.color='#000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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

          <h2 ref={subtitle => this.subtitle = subtitle}>Potwierdzenie</h2>

          <p ref={message => this.message = message }>Podaj datę usunięcia trasy</p>
          <form>
            <input type="date" id="dateInput" min={moment().format("YYYY-MM-DD")} />
            <button onClick={(() => {
              let dataInput = new Date(document.getElementById("dateInput").value);
              let dataFormatted = moment(dataInput).format("YYYY-MM-DD");
              this.props.deleteTrasa(this.state.selectedId, dataFormatted);
              this.closeModal();
            }).bind(this)}>Potwierdz</button>
            <button onClick={this.closeModal}>Anuluj</button>
          </form>
        </ReactModal>
      </div>
    );
  }

}
export default DeleteTrasaModal
