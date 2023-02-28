import React from 'react';

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
            <div className="beast">
                <h2>{this.props.title}</h2>
                <img 
                    src={this.props.imageUrl}
                    alt={this.props.alt}
                    title={this.props.title}
                    onClick={this.addFavorite}
                />
                <p>{this.props.description}</p>
                <p>❤️ {this.state.favorites} favorites</p>
            </div>
        );
    }
}

export default HornedBeast;