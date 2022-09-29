import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from "../images/icon.png";


const Navb = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" style={{fontSize:25}}>
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={Icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            
          </Navbar.Brand>
          {/* <Navbar.Brand href="#home"
          style={{
            display:"flex"
          }}>Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
        </>
    )
}

export default Navb;