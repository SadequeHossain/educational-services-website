import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const CourseCard = (props) => {
    const { img, name } = props.course
    return (
        <div>
           
                <Card style={{ width: '18rem', margin:"10px" }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="warning">Learn More</Button>
                    </Card.Body>
                </Card>
            
        </div>
    );
};

export default CourseCard;