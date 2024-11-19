import React, {useState} from 'react';
import '../styling/landing_section4_style.css';
import AdityaS from './../../Assets/Logos/Logo_Placeholder.jpeg';
import AvanthikaK from './../../Assets/Logos/Logo_Placeholder.jpeg';
import SaanviV from './../../Assets/Logos/Logo_Placeholder.jpeg';
import HODs from './../../Assets/Logos/Logo_Placeholder.jpeg';
import EventHeads from './../../Assets/Logos/Logo_Placeholder.jpeg';


const members = [
    {
        name: "Aditya Sankar",
        description: "Description for Aditya Sankar goes here.",
        image: AdityaS,
    },
    {
        name: "Avanthika Krishnan",
        description: "Description for Avanthika Krishnan goes here.",
        image: AvanthikaK,
    },
    {
        name: "Saanvi Venugopal",
        description: "Description for Saanvi Venugopal goes here.",
        image: SaanviV,
    },
    {
        name: "HODs",
        description: "Arav Agarwal - Finance",
        description2: "Aanika Krishnan - Social Media & Comms",
        description3: "Ashwanth - Logistics and Security",
        image: HODs,
    },
    {
        name: "Event Heads",
        description: "Palak Sadana - Test Tube",
        description2: "Himaja M & Spurti A - Excellence Expo",
        description3: "Ruchi Singhal - Root Issue",
        description4: "Pencilin - Don't know yet",
        image: EventHeads,
    },
];
const Landing_Section4 = () => {
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
    let div = <>
        <div className={'container'} id={'team_div'}>
            <div className={'heading_div'} id={'s4_heading_div'}>
                <h1 className={'div_heading'} id={'s4_heading'}>Meet our Team</h1>
            </div>

            <div className={'card'} id={'team_carousel_div'}>
                <button className="nav-button" onClick={handlePrev}>
                    &#10094;
                </button>
                <div className="team-content" id={'team_info'}>
                    <img className="member-image" src={members[currentMember].image} alt="Team Member Image"
                         id="team_image"/>
                    <div className="team-text" id={'team_info_text'}>
                        <h2>{members[currentMember].name}</h2>
                        <p>{members[currentMember].description}</p>
                        <p>{members[currentMember].description2}</p>
                        <p>{members[currentMember].description3}</p>
                        <p>{members[currentMember].description4}</p>
                    </div>

                </div>
                <button className="nav-button" onClick={handleNext}>
                    &#10095;
                </button>
            </div>

        </div>
    </>;
    return div
}

export default Landing_Section4;