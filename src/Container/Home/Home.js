import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Figure, Form, Image, Row } from 'react-bootstrap';
import './Home.css';
import sld1 from '../../Images/Slider-1.jpg'
import sld2 from '../../Images/Slider-2.jpg';
import stdl1 from '../../Images/StudentLife-1.jpg';
import stdl2 from '../../Images/StudentLife-2.jpg';
import qustionImg from '../../Images/Question.jpg';
import comminityImg from '../../Images/Community-1.jpg';
import Activities from '../hooks/ActivitiesCard/Activities';




const Home = () => {

    const [activities, SetActivities] = useState([]);
    useEffect(() => {
        fetch('afterSchool.JSON')
            .then(res => res.json())
            .then(data => SetActivities(data))

    }
        , [])

    console.log(activities)
    return (
        <div className="home-container">

            <Container fluid>
                <Row>
                    <Col lg={6} xs={12}>
                        <h2> Quality of Education</h2>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={sld1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Quality Education</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={sld2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Learn With fun</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>



                    </Col>
                    <Col lg={6} xs={12}>
                        <h2>Student Life</h2>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={stdl1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Quality Education</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={stdl2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Learn With fun</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                    </Col>
                </Row>

                <Row>
                    <div >
                        <h1>
                            Offering access to high-quality education for every student
                        </h1>
                        <p>
                            Additionally acces to more than 2500+ free Online learning resources
                        </p>
                    </div>
                </Row>
                <Row>
                    <Col lg={3}>

                    </Col>
                    <Col lg={6}>
                        <small> Welcome To Us</small>
                        <h1>Welcome to Greenville</h1>
                        <p>
                            Our buildings are filled with children and adults who want to come to school every day. They are engaged in activities that light up their brains, sharpen their critical capacities and develop their consciences.
                        </p>
                    </Col>
                    <Col lg={3}>

                    </Col>
                </Row>
                <Container>
                    <Row>
                       {

                           activities.map(activity => <Activities activity={activity}></Activities>)
                       }
                    </Row>
                </Container>
            </Container>
            
            <Container>
            <Row>
                <Col lg={6} xs={12}>
                    <small>A Big Family</small>
                    <h1>Building Our Community</h1>
                    <p>
                        Building a strong sense of community in Greenville school is both important and doable. Our school uses different Community - Building Approaches, that helps us to be a family.
                    </p>
                    <Button variant="warning">Make an Appointment</Button>
                </Col>
                <Col lg={6} xs={12}>
                   <Image fluid src={comminityImg} ></Image>
                </Col>

            </Row>
                 <Col lg={12} xs={12}>
                     <h1>After School Activities</h1>
                 </Col>
                <Row>
                <Row>
                       {

                           activities.map(activity => <Activities activity={activity}></Activities>)
                       }
                    </Row>
                </Row>
            </Container>


            <Row>
                <Col lg={12}>
                    <small>Testimonial</small>
                    <h1>What Parents say</h1>

                </Col>
                <Col lg={3} xs={12}>Flexible Schedule</Col>
                <Col lg={4} xs={12}>After School Programs</Col>
                <Col lg={4} xs={12}>Proven Track Record</Col>
            </Row>
            <Row>



                <Col lg={6} xs={12}>
<Image fluid src={qustionImg}></Image>

                </Col>
                <Col lg={6} xs={12}>
                    <small>How can we help you?</small>
                    <h1>Have any questions?</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write your Message Here</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <Button variant="warning">Submit</Button>
                </Col>

            </Row>

        </div>
    );
};

export default Home;