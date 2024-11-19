import React from 'react';
import '../styling/landing_section5_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faXTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Landing_Section5 = () => {
    let div;
    div = <>

            <footer className='footer' id='landing-s5-footer'>

                <div className="footer-container">
                    <div className="footer-logos" id='footer-logo-div'>
                        <a href="#" className="social-icon" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="#ffffff"/>
                        </a>
                    </div>

                    <div className='container' id='footer-address-container'>
                        <a id='TISB-Link' href='https://maps.app.goo.gl/kviCSFVvaf2HEaKN6' target='blank'>TISB's Address</a>
                        <p>NAFL Valley Whitefield - Sarjapur Road,</p>
                        <p>near Dommasandra Circle, Bengaluru,</p>
                        <p>Karnataka 562125</p>
                    </div>


                    <div className="footer-info" id="footer-info-div">
                        <p>Have any questions? Write to us at:</p>
                        <h3 id='email-address-h3'>genesis@tisb.ac.in</h3>
                        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                    </div>
                </div>
            </footer>
    </>;
    return div
}

export default Landing_Section5;
