import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Programms = (props) => {

    const { img, name, description } = props.program
    return (


        <Col lg={4} xs={12} md={6} sm={6}>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={img} />
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

export default Programms;