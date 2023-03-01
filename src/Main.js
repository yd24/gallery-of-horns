import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row className="justify-content-center gap-4">
                        {data.map((beast) =>
                            <HornedBeast 
                                key={beast._id}
                                title={beast.title}
                                imageUrl={beast.image_url}
                                description={beast.description}
                                alt={beast.keyword}
                                showModal={this.props.showModal}
                                handleShow={this.props.handleShow}
                            />
                        )}
                    </Row>
                </Container>
                <SelectedBeast 
                    beastInfo={this.props.beastInfo}
                    showModal={this.props.showModal}
                    handleClose={this.props.handleClose}
                />
            </>
        );
    }
}

export default Main;