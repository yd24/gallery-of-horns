import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {
    render() {
        return (
            <Container>
                <Row md={3} lg={4}>
                    {data.map((beast) =>
                        <HornedBeast 
                            key={beast._id}
                            title={beast.title}
                            imageUrl={beast.image_url}
                            description={beast.description}
                            alt={beast.keyword}
                        />
                    )}
                </Row>
            </Container>
        );
    }
}

export default Main;