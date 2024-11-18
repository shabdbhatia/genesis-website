import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar_style.css'; // Import your CSS file
import Genesis_Logo from './../Assets/Logos/Genesis_Logo_Transperant.png';

function NavigationBar() {
    return (
        <Navbar className="custom-navbar" expand="md">
            <Container>
                {/*<Navbar.Brand href="#" className="Main-Headings" id="Navbar-Heading">*/}
                {/*    Genesis 2024*/}
                {/*</Navbar.Brand>*/}
                <Navbar.Brand>
                    <img src={Genesis_Logo} alt={'genesis_logo'} className={'navbar_logo'} id={'genesis_logo'}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={"navbar-links"}>Home</Nav.Link>
                        <Nav.Link href="#about" className={"navbar-links"}>About</Nav.Link>
                        <Nav.Link href="#services" className={"navbar-links"}>Schedule</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
