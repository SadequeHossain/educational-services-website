import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Figure, Form, Image, Row } from 'react-bootstrap';
import './Home.css';
import sld1 from '../../Images/Slider-1.jpg'
import sld2 from '../../Images/Slider-2.jpg';
import stdl1 from '../../Images/StudentLife-1.jpg';
import stdl2 from '../../Images/StudentLife-2.jpg';
import event1 from '../../Images/event1.jpg';
import event2 from '../../Images/event2.jpg';

import qustionImg from '../../Images/Question.jpg';
import comminityImg from '../../Images/Community-1.jpg';
import Activities from '../hooks/ActivitiesCard/Activities';
import Slider from 'react-slick/lib/slider';
import { NavLink } from 'react-router-dom';




const Home = () => {

    const [activities, SetActivities] = useState([]);
    useEffect(() => {
        fetch('afterSchool.JSON')
            .then(res => res.json())
            .then(data => SetActivities(data))

    }
        , [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    };
    return (
        <div fluid style={{ margin: "0", padding: "0" }}>

            <div fluid className="titleSlid-container" >

                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="title-img"
                            src={sld1}
                            alt="First slide w-100"
                        />
                        <Carousel.Caption>
                            <div className="slider-description">
                                <h3 className="title-slide">Quality Education</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="title-img w-100"
                            src={sld2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="slider-description">
                                <h3 className="title-slide">Learn With fun</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
            <Row>
                <Col lg={12}>
                    <div className="titleContainer">
                        <h1>
                            Offering access to high-quality education for every student
                        </h1>
                        <p>
                            Additionally acces to more than 2500+ free Online learning resources
                        </p>
                    </div>
                </Col>
            </Row>

            <Row className="multi-carousel">
                <Col lg={12}>
                    <Container fluid>
                        <Row>
                            <Col lg={4} xs={12}>
                                {/* <h2> Quality of Education</h2> */}
                                <Carousel fade className="carouselitem">
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
                            <Col lg={4} className="noticeboard">
                                <h3>Event and News</h3>
                                <Carousel fade className="carouselitem">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={event1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>The Right High School: Myth Vs Reality</h3>
                                            <p>A worshop for junior High School Students</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={event2}
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>A Beginner's Complete Guide to Art Class</h3>
                                            <p>Oritation program for new Students</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                </Carousel>

                            </Col>
                            <Col lg={4} xs={12}>
                                {/* <h2>Student Life</h2> */}

                                <Carousel fade className="carouselitem">
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
                    </Container>

                </Col>

            </Row>

            <Row>
                <Col lg={3}>

                </Col>
                <Col lg={6} className="welcomeTitle">
                    <small style={{ color: "green" }} > Welcome To Us</small>
                    <h1 style={{ color: "goldenrod" }}><span style={{ color: "green" }}> Welcome to</span> GreenView</h1>
                    <p>
                        Our buildings are filled with children and adults who want to come to school every day. They are engaged in activities that light up their brains, sharpen their critical capacities and develop their consciences.
                    </p>
                </Col>
                <Col lg={3}>

                </Col>
            </Row>
            {/* <Container>
                <Row>
                    {

                        activities.map(activity => <Activities activity={activity}></Activities>)
                    }
                </Row>
            </Container> */}


            <Container >
                <Row >

                    <Col lg={5} xs={12} id="community-title">
                        <div>
                            <small style={{ color: "green" }}>A Big Family</small>
                            <h1 style={{ color: "green" }}>Building Our Community</h1>
                            <p>
                                Building a strong sense of community in Greenville school is both important and doable. Our school uses different Community - Building Approaches, that helps us to be a family.
                            </p>
                            <Button variant="warning">Make an Appointment</Button>
                        </div>
                    </Col>
                    <Col lg={7} xs={12}>
                        <Image fluid src={comminityImg} style={{ margin: "20px", borderRadius: "20px" }} ></Image>
                    </Col>


                </Row>
                <Row className="activities-container">
                    <Col lg={12} xs={12} >
                        <div className="titleContainer">
                            <h1>After School Activities</h1>
                        </div>
                    </Col>

                    <Col lg={12} xs={12}>
                        <Slider {...settings}>
                            {

                                activities.map(activity => <Activities activity={activity}></Activities>)
                            }
                        </Slider>
                    </Col>
                </Row>

                {/* <Row className="activities-container">
                    <Col lg={12}>
                        <div className="titleContainer">
                            <small style={{ color: "green" }}>Testimonial</small>
                            <h1>What Parents say</h1>
                        </div>

                    </Col>
                    <Col lg={4} xs={12}>Flexible Schedule</Col>
                    <Col lg={4} xs={12}>After School Programs</Col>
                    <Col lg={4} xs={12}>Proven Track Record</Col>
                </Row> */}

            </Container>



            <Row className="message-container">



                <Col lg={6} xs={12}>
                    <Image fluid src={qustionImg}></Image>

                </Col>
                <Col lg={6} xs={12}>
                    <div className="titleContainer">
                        <small style={{ color: "white" }}>How can we help you?</small>
                        <h1>Have any questions?</h1>
                    </div>
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
                    <NavLink to="/submission"><Button type="submit" variant="warning">Submit</Button></NavLink>
                </Col>

            </Row>

        </div>
    );
};

export default Home;