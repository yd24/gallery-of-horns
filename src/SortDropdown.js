import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class SortDropdown extends React.Component {
    handleSortBeasts = (e) => {
        this.props.updateFiltersSorts(e.target.value, "sort");
    };

    render() {
        return (
            <Col lg={2} className="mb-4">
                <Form.Select className="ellipsis" aria-label="Select Sort By" onChange={this.handleSortBeasts}>
                    <option value="0">Sort Beasts By:</option>
                    <option value="1">Number of Horns (Most)</option>
                    <option value="2">Number of Horns (Least)</option>
                    <option value="3">Name (A-Z)</option>
                    <option value="4">Name (Z-A)</option>
                    <option value="5">Beast Type (A-Z)</option>
                    <option value="6">Beast Type (Z-A)</option>
                </Form.Select>
            </Col>
        );
    }
}

export default SortDropdown;