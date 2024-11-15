
        // <div className={'navbar'} id={'navbar_div'}>
        //     <div className={'navbar_container'} id={'left_div_navbar'}>
        //         <h1 className={'navbar_heading'} id={'nav_heading'}>Genesis 2024</h1>
        //     </div>
        //     <div className={'navbar-container'} id={'right_div_navbar'}>
        //         <a className={'navbar_link'} id={'navbar_link-1'} href={'#'}>Home</a>
        //         <a className={'navbar_link'} id={'navbar_link-2'} href={'#'}>About</a>
        //         <a className={'navbar_link'} id={'navbar_link-3'} href={'#'}>Schedule</a>
        //     </div>
        // </div>
        // src/Navbar.js

        import React from 'react';
        import { Navbar, Nav, Container } from 'react-bootstrap';
        import 'bootstrap/dist/css/bootstrap.min.css';

        function NavigationBar() {
            return (
                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Brand href="#">Genesis 2024</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#services">Schedule</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            );
        }

        export default NavigationBar;
