import React, {useState} from 'react';
import './../styling/landing_section3_style.css';

const members = [
    {
        name: "Test Tube",
        description: "Description for Sponsor 1 goes here.",
        // image: NambiarBuilders,
    },
    {
        name: "SAAM Tours & Travels",
        description: "Description for Sponsor 2 goes here.",
        // image: Sam,
    },
];
const Landing_Section3 = () => {
    const [currentMember, setCurrentMember] = useState(0);

    const handlePrev = () => {
        setCurrentMember(
            currentMember === 0 ? members.length - 1 : currentMember - 1
        );
    };

    const handleNext = () => {
        setCurrentMember(
            currentMember === members.length - 1 ? 0 : currentMember + 1
        );
    };
    return (
        <div className={'container'} id={'team_div'}>
            <div className={'heading_div'} id={'s3_heading_div'}>
                <h1 className={'div_heading'} id={'s3_heading'}>Meet our Team</h1>
            </div>

            <div className={'card'} id={'team_carousel_div'}>
                <button className="nav-button" onClick={handlePrev}>
                    &#10094;
                </button>
                <div className="team-content">
                    <img className="member-image" src={members[currentMember].image} alt="Team Member Image"
                         id="team_image"/>
                    <h2>{members[currentMember].name}</h2>
                    <p>{members[currentMember].description}</p>
                </div>
                <button className="nav-button" onClick={handleNext}>
                    &#10095;
                </button>
            </div>

        </div>
)
}

export default Landing_Section3;