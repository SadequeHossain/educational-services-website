import React from 'react';
import { Button, Col, Container, Image, Row, TabContainer } from 'react-bootstrap';
import './Admission.css';
import admissionImg from '../../Images/admission-2.jpg';
import { NavLink } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const Admission = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={12} sm={12} xs={12}>
                    <h1>Admission</h1>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col lg={6} sm={12} xs={12}>

                        <div className="titleContainer">
                            How to Apply
                            <h1>Admission Process</h1>
                            <p>
                                Choosing a school for our children is one of the most important decisions we as parents make, and while we may have already identified key elements we would want for our children's school, our final decision is often influenced by the 'feel' of our chosen school.

                                In the first instant, we would recommend that you arrange an appointment to come and visit us and see for yourself what an unrivalled learning experience life at Greenville truly is!
                            </p>
                        </div>

                        <NavLink to="/contact"> <Button variant="warning">Make an Appointment</Button></NavLink>
                    </Col>
                    <Col lg={6} sm={12} xs={12} >
                        <Image fluid src={admissionImg}></Image>
                    </Col>
                </Row>
            </Container>

            <Row>
                <Col lg={12} sm={12} xs={12} >
                    <div className="titleContainer" style={{margin:'100px', padding:'50px'}}>
                        Download
                        <h1>Application Form </h1>
                        <p> We hope your campus visit will confirm that GreenView School is the best fit for your child. To submit an application, download the form, complete it, and mail it to us.</p>

                        <Button variant="warning"> <FaDownload></FaDownload> Download</Button>
                    </div>
                </Col>



            </Row>




        </Container>
    );
};

export default Admission;