import React from 'react';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0,
            rainbow: false
        };
    }

    addFavorite = () => {
        this.setState({
            favorites: this.state.favorites + 1
        });
    };

    toggleRainbow = () => {
        this.setState({
            rainbow: !this.state.rainbow
        });
    }

    render() {
        return(
            <Col className={this.state.rainbow ? "beast rainbow" : "beast"}>
                <h2 onClick={this.toggleRainbow}>{this.props.title}</h2>
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