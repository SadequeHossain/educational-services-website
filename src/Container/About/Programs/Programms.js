import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Programms = (props) => {

    const{img,name, description}=props.program
    return (
       

            <Card style={{ width: '18rem', margin:'10px' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
            </Card>
       

    );
};

export default Programms;