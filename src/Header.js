import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rainbow: false
        };
    }

    toggleRainbow = () => {
        this.setState({
            rainbow: !this.state.rainbow
        });
    }

    render() {
        return this.state.rainbow ? 
            <h1 className="rainbow" onClick={this.toggleRainbow}>Gallery of Rainbow Death</h1> : 
            <h1 onClick={this.toggleRainbow}>Gallery of Horned Beasts</h1>;
    }
}

export default Header;