import React, { useEffect, useState } from 'react';
import './Courses.css'
import { Accordion, Col, Container, Row } from 'react-bootstrap';
// import Programms from '../About/Programs/Programms';
import CourseCard from '../../Container/hooks/CourseCard/CourseCard.js'
import Slider from "react-slick";


const Courses = () => {

    const [programms, SetProgramms] = useState([]);

    useEffect(() => {
        fetch('programs.JSON')
            .then(res => res.json())
            .then(data => SetProgramms(data))

    }, [])

    // Responsive carousel slider

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        <Container>
         
                <Row>
                    <Col className="titleContainer" style={{ color: 'green' }}>
                        What We Teach
                        <h1>Our Programs</h1>
                    </Col>

                </Row>


                <Row className="carousel-slider">

                   
                   
                    {/* carousl or Slider */}
                   
                   
                        {
                            programms.map(course => <CourseCard course={course}></CourseCard>)
                        }
                    
                   
                </Row>

                <div className="accordian-container">
                    Payment
                    <h1> Tuition Fees</h1>
                    <div>
                        <Accordion defaultActiveKey="none">
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header   ><h5 style={{ color: "green" }}>TUITION FEES FROM SEPTEMBER 2022</h5></Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <li><bold>Elementary (Grades 1 - 3):</bold> $3200 per term</li>
                                        <li>Upper Elementary (Grades 4 - 6): $3700 per term</li>
                                        <li>Junior High (Grades 7 - 8): $4600 per term</li>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h5 style={{ color: "green" }}>ENTRANCE FEES AND DEPOSITS </h5></Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <li>Elementary (Grades 1 - 3): $3200 per term</li>
                                        <li>Upper Elementary (Grades 4 - 6): $3700 per term</li>
                                        <li>Junior High (Grades 7 - 8): $4600 per term</li>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
           
        </Container>
    );
};

export default Courses;