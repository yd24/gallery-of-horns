import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
    render() {
        return (
            <div className="beast-container">
                {data.map(beast => 
                    <HornedBeast 
                        key={beast._id}
                        title={beast.title}
                        imageUrl={beast.image_url}
                        description={beast.description}
                        alt={beast.keyword}
                    />
                )}
            </div>
        );
    }
}

export default Main;