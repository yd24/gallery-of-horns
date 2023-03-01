import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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

    passBeastToShow= () => {
        //beastInfo object structure
        this.props.handleShow({
            title: this.props.title,
            description: this.props.description,
            src: this.props.imageUrl,
            alt: this.props.alt
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
                    onClick={this.passBeastToShow}
                />
                <p>{this.props.description}</p>
                <p className="fav">
                    <Button onClick={this.addFavorite}>Favorite Me!</Button>
                    <span>❤️ {this.state.favorites}</span>
                </p>
            </Col>
        );
    }
}

export default HornedBeast;