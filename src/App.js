
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Headers from './Container/Header/Headers';
import Footer from './Container/Footer/Footer';
import Home from './Container/Home/Home';
import Contactus from '../src/Container/Contactus/Contactus'
import Courses from '../src/Container/Courses/Courses'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import About from './Container/About/About';
import Admission from './Container/Admission/Admission';

function App() {
  return (
    <div className="App">

      <Container fluid>
        <BrowserRouter>
          <Headers></Headers>
          <div className="Route-Container">
          <Routes >
            <Route path="/home" element={<Home></Home>} />
            <Route path="/" element={<Home></Home>} />
            <Route path="/contact" element={<Contactus></Contactus>} />
            <Route path="/courses" element={<Courses></Courses>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/admission" element={<Admission></Admission>} />


          </Routes>
          </div>



          {/* <Container fluid>
          <Footer></Footer>
        </Container> */}
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
