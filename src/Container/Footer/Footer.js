import React from 'react';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <Row >

                <Col lg={4} sm={12} >
                    <h4>GreenView School</h4>
                    <p> 23 Green Street, Dhaka, Bangladesh
                    </p>
                </Col>
                <Col lg={4} sm={12} >
                    contact: Phone: 365138054 949
                    info@example.com
                    <br />
                    Flow us On: <br />
                    <FaFacebookSquare></FaFacebookSquare>
                    <FaTwitterSquare></FaTwitterSquare>
                    <FaInstagram></FaInstagram>
                </Col>
                <Col lg={4} sm={12} >
                    News Letter <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup>
                </Col>

            </Row>
        </footer>
    );
};

export default Footer;