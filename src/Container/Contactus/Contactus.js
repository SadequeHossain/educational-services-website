
import React from 'react';
import './Contactus.css'
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contactus = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h2> GreenView School</h2>
                    <h5> 23 Green Street, Dhaka, Bangladesh</h5>
                    <h5> Phone: 365138054 949</h5>
                    <h5> info@example.com</h5>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    Send Us a Message
                    <h1>Get in Touch</h1>

                    <br />

                    <div className="form-container">
                        <Col lg={4} md={4} sm={12}>


                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Write your full Name Here" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Write your Mesage Here</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>

                        </Col>
                    </div>

                </Col>
            </Row>


        </Container>
    );
};

export default Contactus; 