import React from 'react';
import Landing_Section1 from './components/Landing_Section1';
import Landing_Section2 from './components/Landing_Section2';
import Landing_Section3 from './components/Landing_Section3';
import Landing_Section4 from './components/Landing_Section4';
import Landing_Section5 from './components/Landing_Section5';

const LandingPage = () => {
    return (
        <div className="App">
            <Landing_Section1/>
            <Landing_Section2/>
            <Landing_Section3/>
            <Landing_Section4/>
            <Landing_Section5/>
        </div>
    );
};

export default LandingPage;