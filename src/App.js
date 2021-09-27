import logo from './logo.svg';
import './App.scss';
import './custom.scss';
import styled, { css } from 'styled-components'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiArrowDown } from "react-icons/fi";
import imgEgg from "./assets/images/desktop/image-transform.jpg"
import imgGlass from "./assets/images/desktop/image-stand-out.jpg"
import imgCherry from "./assets/images/desktop/image-graphic-design.jpg"
import imgOrange from "./assets/images/desktop/image-photography.jpg"


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;


const h2 = styled.h2`
  font-size:140px;
  display:flex;
`;
function App() {
  return (
    
    

<homepage className="main-container">
  <Navbar className="nav-text"  fixed="top" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="nav-title">sunnyside</Navbar.Brand>
        <Nav className="justify-content-end nav-link">
          <Nav.Link variant="dark" href="#home">About</Nav.Link>
          <Nav.Link href="#features">Services</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
          <Nav.Link className='nav-button' href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

      <Container fluid className="container-image-background" >
        <Row>
          <Col><h1 className="main-title-center">WE ARE CREATIVES<FiArrowDown/> </h1></Col>
        </Row>
      </Container>
    <Container fluid>
      <Row>
        <Col className="galery-text">
          <h2 className="galery-h2">Transform yours <br/> brand</h2>
          <p className="galery-p">We are full-service creative agency specializing in helping brands grow fast. Engage your clients though compelling visuals that do the most of the marketing for you.</p>
          <button className="galery-button">LEARN MORE</button>
        </Col>
        <Col className="galery-img-margin"><img src={imgEgg} alt="Egg Yellow background"></img></Col>
      </Row>
      <Row>
        <Col className="galery-img-margin"><img src={imgGlass} alt="Glass"></img></Col>
        <Col className="galery-text">
          <h2 className="galery-h2">Transform yours <br/> brand</h2>
          <p className="galery-p">We are full-service creative agency specializing in helping brands grow fast. Engage your clients though compelling visuals that do the most of the marketing for you.</p>
          <button className="galery-button">LEARN MORE</button></Col>
      </Row>
      <Row>
        <Col className="galery-img-margin"><img src={imgCherry} alt="Cherry"></img></Col>
        <Col className="galery-img-margin"><img src={imgOrange} alt="Glass"></img></Col>
      </Row>
    </Container>
    <Container fluid>
   
    </Container>

</homepage>

    
    
  
      
  );
}

export default App;
