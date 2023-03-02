import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchBar extends React.Component {
    handleQuery = (e) => {
        this.props.updateFiltersSorts(e.target.value, "search");
    };

    render() {
        return(
            <Row className="justify-content-center search">
                <Col lg={8}>
                    <Form.Control className="form-control-lg"
                        type="text"
                        placeholder="Search Horned Beasts..."   
                         onChange={this.handleQuery}
                    >
                    </Form.Control>
                </Col>
            </Row>
        );
    }
}

export default SearchBar;