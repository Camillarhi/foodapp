import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo1  from "../images/logo1.png";



function BasicExample() {
  return (
    <Navbar expand="lg" 

    style={{
        paddingTop: 30,
    }}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo1} alt={'lilies'}/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" style={{ paddingRight: 10, color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ paddingRight: 25, color: "white" }}>
              Login
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-success"
            style={{
              paddingRight: 38,
              paddingLeft: 38,
              paddingTop: 10,
              paddingButtom: 10,
              background: '#E2B887',
              color: '#00302E',
              fontWeight: 'bold',

            }}
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
