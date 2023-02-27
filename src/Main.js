import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return (
            <HornedBeast 
                title="Joe"
                imageUrl="pass"
                description="Hey"
            />
        );
    }
}

export default Main;