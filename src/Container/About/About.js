import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col lg={6} xs={12} sm={12} >
                        <h5>An Extra ordinary Leader</h5>
                        <h1>Head of School</h1>
                        <h1>Welcome</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore reprehenderit quibusdam earum ab qui libero nulla itaque? Facere suscipit quibusdam deleniti magnam placeat officiis esse minima in rerum culpa odit doloremque ut velit necessitatibus architecto, reprehenderit saepe eaque debitis itaque ipsam. Aspernatur odit corrupti at. Perspiciatis nesciunt optio iusto?</p>

                        <h6> Mr. X, <small>Head of School</small> </h6>


                    </Col>
                    <Col lg={6} xs={12} sm={12} >
                        <h1>Picture</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>

                    <Col lg={6} xs={12} sm={12} >
                        <h1>Picture</h1>
                    </Col>
                    <Col lg={6} xs={12} sm={12} >
                        <h5>Our Goal</h5>
                        <h1>Our Mission Statement</h1>

                        <p>
                            Greenville identifies and develops the intellectual and creative talents of a diverse group of students. Within supportive and caring college preparatory environment, students are encouraged to achieve their finest in academics, athletics and the arts.

                            Our ultimate goal is to teach students to live humanely within the community in order to prepare them to meet the demands and responsibilities of the future in the broader world.


                        </p>
                    </Col>
                </Row>
            </Container>
<Row>
<Col lg={12} xs={12} sm={12}>
    Photo Gallery
    <h1>Our Facilities</h1>
</Col>
</Row>



            <Row>
                <Col lg={12} xs={12} sm={12}>
                    <h4> What we Teach</h4>
                    <h1> Our Programs</h1>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col lg={4} xs={12} sm={12}> col-1</Col>
                    <Col lg={4} xs={12} sm={12}> col-2</Col>
                    <Col lg={4} xs={12} sm={12}> col-3</Col>
                </Row>
                <Button variant="warning">View All Programms</Button>
            </Container>

        </Container>
    );
};

export default About;
