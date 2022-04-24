import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Activities = (props) => {
    const { img, name, description } = props.activity

    return (

        <Card style={{ width: '18rem', border:"2px solid green" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="success">Learn More</Button>
            </Card.Body>


        </Card>

    );
};

export default Activities;