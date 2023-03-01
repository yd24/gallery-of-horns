import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {
    displayHornedBeasts = () => {
        let ele = (<p className="no-result">No results found!</p>);
        if (this.props.beasts.length > 0) {
            ele = this.props.beasts.map((beast) =>
                <HornedBeast 
                    key={beast._id}
                    title={beast.title}
                    imageUrl={beast.image_url}
                    description={beast.description}
                    alt={beast.keyword}
                    showModal={this.props.showModal}
                    handleShow={this.props.handleShow}
                />
            );
        }
        return ele;
    };

    render() {
        return (
            <>
                <Container>
                    <Row className="justify-content-center gap-4">
                        {this.displayHornedBeasts()}
                    </Row>
                </Container>
                <SelectedBeast 
                    selectedBeast={this.props.selectedBeast}
                    showModal={this.props.showModal}
                    handleClose={this.props.handleClose}
                />
            </>
        );
    }
}

export default Main;