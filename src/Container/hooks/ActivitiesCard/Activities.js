import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Activities = (props) => {
const {img,name,description}=props.activity

    return (
        <Col lg={4} xs={12} sm={12}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Activities;