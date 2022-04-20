import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import errorImg from '../../Images/pageNotFound-2.jpg'

const NotFound = () => {
    return (
        <Container>
            <Row>
            <Col lg={3}>
                
                </Col>
                <Col lg={6}>
                <Image fluid src={errorImg}></Image>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Container>
    );
};

export default NotFound;