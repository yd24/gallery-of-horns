import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class FilterByHorns extends React.Component {

    handleHornsFilter = (e) => {
        this.props.updateFiltersSorts(e.target.value, "numHorns");
    };

    //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    //Using Set eliminates need for more verbose code using filter.
    howManyHorns() {
        let set = new Set();
        this.props.allBeasts.forEach(beast => set.add(beast.horns))
        return [...set];
    }

    render() {
        return(
            <Col lg={2} className="mb-4">
                <Form.Select className="ellipsis" aria-label="Filter Beasts By:" onChange={this.handleHornsFilter}>
                    <option value="">Filter Beasts By:</option>
                    {
                        this.howManyHorns().map( (numHorns, idx) => {
                            return (
                                <option 
                                    key={idx} value={numHorns}>{numHorns} {numHorns === 1 ? 'horn' : 'horns'}
                                </option>
                            );
                        })
                    }
                </Form.Select>
            </Col>
        );
    }
}

export default FilterByHorns;