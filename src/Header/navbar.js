import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar_style.css'; // Import your CSS file
import Genesis_Logo from './../Assets/Logos/Genesis_Logo_Transperant.png';

function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Define the offset variable for consistency
    const navbarOffset = -155; // Adjust based on your navbar height
    const newnavbarOffset = -200;
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = () => {
        setExpanded(false); // Close the navbar after clicking a link
    };

    return (
        <Navbar
            className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
            expand="md"
            expanded={expanded}
        >
            <Container className={"navbar-container"}>
                <Navbar.Brand>
                    <img src={Genesis_Logo} alt="genesis_logo" className="navbar_logo" id="genesis_logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)} // Toggle the navbar open/close
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link
                            to="landing_s1_div"
                            smooth={true}
                            duration={500}
                            offset={navbarOffset} // Use the variable here
                            className="navbar-links"
                            spy={true}
                            activeClass="active"
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                        <Link
                            to="events_div"
                            smooth={true}
                            duration={500}
                            offset={navbarOffset} // Use the variable here
                            className="navbar-links"
                            spy={true}
                            activeClass="active"
                            onClick={handleLinkClick}
                        >
                            Events
                        </Link>
                        <Link
                            to="schedule_div"
                            smooth={true}
                            duration={500}
                            offset={newnavbarOffset} // Use the variable here
                            className="navbar-links"
                            spy={true}
                            activeClass="active"
                            onClick={handleLinkClick}
                        >
                            Schedule
                        </Link>
                        <Link
                            to="team_div"
                            smooth={true}
                            duration={500}
                            offset={navbarOffset} // Use the variable here
                            className="navbar-links"
                            spy={true}
                            activeClass="active"
                            onClick={handleLinkClick}
                        >
                            Meet our Team
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;