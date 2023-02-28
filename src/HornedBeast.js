import React from 'react';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        };
    }

    addFavorite = () => {
        this.setState({
            favorites: this.state.favorites + 1
        });
    };

    render() {
        return(
            <Col className="beast">
                <h2>{this.props.title}</h2>
                <img 
                    src={this.props.imageUrl}
                    alt={this.props.alt}
                    title={this.props.title}
                    onClick={this.addFavorite}
                />
                <p>{this.props.description}</p>
                <p>❤️ {this.state.favorites} favorites</p>
            </Col>
        );
    }
}

export default HornedBeast;