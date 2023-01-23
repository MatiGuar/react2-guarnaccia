import './NavBar.css'
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
 
      <Navbar  bg="light bg-propio" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ser Biosfera</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='nav-bar-style'>
            <Nav>
              <NavLink className={({ isActive })=>(isActive ? 'active' : 'inactive')} to="/">Inicio</NavLink>
              <NavLink className={({ isActive })=>(isActive ? 'active' : 'inactive')} to="/category/men's clothing">Hombre</NavLink>
              <NavLink className={({ isActive })=>(isActive ? 'active' : 'inactive')} to="/category/women's clothing">Mujer</NavLink>
              <NavLink className={({ isActive })=> (isActive ? 'active' : 'inactive')} to="/category/jewelery">Joyeria</NavLink>
              <Nav.Link href="#link">
                  <CartWidget />
              </Nav.Link>     
            </Nav>
          </Navbar.Collapse>
        </Container>
      
      </Navbar>
 
    );
  }
  
  export default NavBar