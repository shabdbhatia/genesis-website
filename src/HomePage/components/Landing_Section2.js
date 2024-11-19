import React, {useState} from 'react';
import './../styling/landing_section2_style.css';

const events = [
    {
        id: 1,
        title: "Test Tube",
        category: "Junior and Senior Category",
        description: "A quiz competition where contestants, in teams of 3, can pit\n" +
            "their biological understanding and trivia against fellow\n" +
            "students in their category, vying to acquire the most points\n" +
            "possible in 3 thrilling rounds.",
    },
    {
        id: 2,
        title: "Excellence Expo",
        category: "Junior and Senior Category",
        description: "A science fair, this event presents participants (1-5 people\n" +
            "per entry) the opportunity to display their scientific\n" +
            "understanding of a provided theme: through models for the\n" +
            "junior category and through research presentations for the\n" +
            "senior category.",
    },
    {
        id: 3,
        title: "Pencilin",
        category: "Junior Category Only",
        description: "This contest is a\n" +
            "poster-making challenge where students, in groups of 3,\n" +
            "will be provided with a topic and supplies on the spot.\n" +
            "They must make the most creative poster possible as well as\n" +
            "a jingle with which to present it within 2.5 hours.",
    },
    {
        id: 4,
        title: "Root Issue",
        category: "Senior Category Only",
        description: "Contestants in this\n" +
            "debate competition must successfully argue their perspective in\n" +
            "teams of 2-4 members. Over 3 rounds, they must present their\n" +
            "position convincingly to the judges based on a variety of prepared\n" +
            "motions-although they will only be assigned ‘For’ or ‘Against’ on\n" +
            "the day.",
    },
];

const Landing_Section2 = () => {

    return (
            <div className="event-container" id={'events_div'}>

                <div className={'heading_div'} id={'s2_heading_div'}>
                    <h1 className={'div_heading'} id={'s2_heading'}>Events</h1>
                </div>
                {events.map((event) => (
                    <div key={event.id} className="event_card">
                        <h2 className="event-title">{event.title}</h2>
                        <p className="event-type">Type: {event.category}</p>
                        <p className="event-description">{event.description}</p>
                    </div>
                ))}
            </div>

    )
}

export default Landing_Section2;