import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                    <Modal.Title>{this.props.beastInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="center-modal">
                        <img 
                            className="full-img"
                            src={this.props.beastInfo.src}
                            alt={this.props.beastInfo.alt}
                        />
                </Modal.Body>
                <Modal.Footer className="justify-content-center modal-desc">
                    <p>{this.props.beastInfo.description}</p>
                </Modal.Footer>
            </Modal>
       ); 
    }
};

export default SelectedBeast;