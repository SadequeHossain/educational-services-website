import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const CourseCard = (props) => {
    const { img, name } = props.course
    return (
        <Col lg={4} sm={12} xs={12}>
           
                <Card style={{ width: '18rem', margin:"10px" }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success">Learn More</Button>
                    </Card.Body>
                </Card>
            
        </Col>
    );
};

export default CourseCard;