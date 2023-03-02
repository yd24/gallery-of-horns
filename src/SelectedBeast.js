import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    render() {
       return(
            <Modal 
                size="lg"
                show={this.props.showModal} 
                onHide={this.props.handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="center-modal">
                        <img 
                            className="full-img"
                            src={this.props.selectedBeast.src}
                            alt={this.props.selectedBeast.alt}
                        />
                </Modal.Body>
                <Modal.Footer className="justify-content-center modal-desc">
                    <p>{this.props.selectedBeast.description}</p>
                </Modal.Footer>
            </Modal>
       ); 
    }
};

export default SelectedBeast;