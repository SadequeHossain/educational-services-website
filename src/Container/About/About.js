import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import teacher from '../../Images/Teacher-2.jpg';
import mission from '../../Images/Mission-1.jpg';
import Gallery from 'react-photo-gallery';
import Programms from './Programs/Programms';
import Image from 'react-bootstrap/Image'
const About = () => {


    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
            width: 4927,
            height: 1000
        },
        {
            src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
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
                <Row>
                <Col lg={6} xs={12} sm={12} >
                       <Image fluid src={teacher}></Image>
                    </Col>
                    <Col lg={6} xs={12} sm={12} >
                        <h5>An Extra ordinary Leader</h5>
                        <h1>Head of School</h1>
                        <h1>Welcome</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore reprehenderit quibusdam earum ab qui libero nulla itaque? Facere suscipit quibusdam deleniti magnam placeat officiis esse minima in rerum culpa odit doloremque ut velit necessitatibus architecto, reprehenderit saepe eaque debitis itaque ipsam. Aspernatur odit corrupti at. Perspiciatis nesciunt optio iusto?</p>

                        <h6> Mrs. X, <small>Head of School</small> </h6>


                    </Col>
                   
                </Row>
            </Container>
            <Container>
                <Row>

                   
                    <Col lg={6} xs={12} sm={12} >
                        <h5>Our Goal</h5>
                        <h1>Our Mission Statement</h1>

                        <p>
                            GreenView identifies and develops the intellectual and creative talents of a diverse group of students. Within supportive and caring college preparatory environment, students are encouraged to achieve their finest in academics, athletics and the arts.

                            Our ultimate goal is to teach students to live humanely within the community in order to prepare them to meet the demands and responsibilities of the future in the broader world.


                        </p>
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
                <Row>
                    {
                        programms.map(program => <Programms program={program}></Programms>)
                    }
                </Row>
                <Button variant="warning">View All Programms</Button>
            </Container>

        </Container>
    );
};

export default About;
