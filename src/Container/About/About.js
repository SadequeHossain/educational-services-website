import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import teacher from '../../Images/Teacher-2.jpg';
import mission from '../../Images/Mission-1.jpg';
import Gallery from 'react-photo-gallery';
import Programms from './Programs/Programms';
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom';

const About = () => {


    const photos = [
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/19528/220-SM938128.jpg",
            width: 4,
            height: 3
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/19528/220-SM938163.jpg",
            width: 1,
            height: 1
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/12194/220-SM382899.jpg",
            width: 3,
            height: 4
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/18455/220-ER826779.jpg",
            width: 3,
            height: 4
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/17072/220-SM743804.jpg",
            width: 3,
            height: 4
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/17072/120-SM743788.jpg",
            width: 4,
            height: 3
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/15127/20-SM594043.jpg",
            width: 3,
            height: 4
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/14757/20-SM559790.jpg",
            width: 4,
            height: 3
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/10582/19-SM299684.jpg",
            width: 4,
            height: 3
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/15930/220-SM660218.jpg",
            width: 3,
            height: 4
        },
        {
            src: "https://d3nn873nee648n.cloudfront.net/900x600/14843/220-SM564499.jpg",
            width: 4,
            height: 3
        }


    ];

    const [programms, SetProgramms] = useState([]);

    useEffect(() => {
        fetch('programs.JSON')
            .then(res => res.json())
            .then(data => SetProgramms(data))

    }, [])

    console.log(programms)

    return (
        <Container fluid>
            <Container>

                <Row className="about-intro">
                    <Col lg={6} xs={12} sm={12} >
                        <Image fluid src={teacher}></Image>
                    </Col>
                    <Col lg={6} xs={12} sm={12} className="text-container">
                        <div>
                            <h5>An Extra ordinary Leader</h5>
                            <h1>Head of School</h1>
                            <h1>Welcome</h1>
                            <p>Dear Families, <br />

                                Welcome to GreenView , and thank you for your interest in our nationally-ranked, world-acclaimed academic program for your child's education.

                                Our approach is simple. We use a renowned STEM-focused liberal arts curriculum, while fully supporting students by responding to every need they have. We hire bright, passionate teachers to teach it while instilling a lifelong love of learning to each child who walks through our doors.</p>

                            <h6> Mrs. Sandra, <small>Head of School</small> </h6>
                        </div>


                    </Col>

                </Row>

            </Container>
            <Container>
                <Row className="about-intro">


                    <Col lg={6} xs={12} sm={12} className="text-container" >
                        <div>
                            <h5>Our Goal</h5>
                            <h1>Our Mission Statement</h1>

                            <p>
                                GreenView identifies and develops the intellectual and creative talents of a diverse group of students. Within supportive and caring college preparatory environment, students are encouraged to achieve their finest in academics, athletics and the arts.

                                Our ultimate goal is to teach students to live humanely within the community in order to prepare them to meet the demands and responsibilities of the future in the broader world.


                            </p>
                        </div>
                    </Col>
                    <Col lg={6} xs={12} sm={12} >
                        <Image fluid src={mission} alt="" />
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col lg={12} xs={12} sm={12}>
                    Photo Gallery
                    <h1>Our Facilities</h1>

                    <div>
                        <Container>
                            <Gallery photos={photos} />;
                        </Container>
                    </div>
                </Col>
            </Row>



            <Row>
                <Col lg={12} xs={12} sm={12}>
                    <h4> What we Teach</h4>
                    <h1> Our Programs</h1>
                </Col>
            </Row>
            <Container>
                <Row >

                    {
                        programms.map(program => <Programms program={program}></Programms>)
                    }

                </Row>

                <NavLink className="navLink" to="/courses"><Button variant="warning">View All Programms</Button></NavLink>

                
            </Container>



        </Container>
    );
};

export default About;
