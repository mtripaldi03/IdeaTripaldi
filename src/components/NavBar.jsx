import React, { Component } from 'react';
import logo from '../logo.png'
import styles from '../index.css'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
class Test extends Component {
    state = {  } 
    render() { 
        return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <a class="navbar-brand" href="#">
    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
     </a>
          <Navbar.Brand href="#home">Nombre Pendiente</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Nosotros</Nav.Link>
              
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Indumentaria</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Calzado</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                </NavDropdown>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      );
    }
}
 
export default Test ;