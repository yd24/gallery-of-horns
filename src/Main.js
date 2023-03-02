import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component {

    render() {
        const hornedBeasts = this.props.beasts.length > 0 ?
            this.props.beasts.map((beast) =>
                <HornedBeast 
                    key={beast._id}
                    title={beast.title}
                    imageUrl={beast.image_url}
                    description={beast.description}
                    alt={beast.keyword}
                    showModal={this.props.showModal}
                    handleShow={this.props.handleShow}
                />
            ) :
            (<p className="no-result">No results found!</p>);

        return (
            <>
                <Row className="justify-content-center gap-4">
                    {hornedBeasts}
                </Row>
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