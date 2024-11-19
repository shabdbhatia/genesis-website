import React from 'react';
import '../styling/landing_section3_style.css';
const Landing_Section3 = () => {

    let div;
    div = <>
        <div className={'container'} id={'schedule_div'}>
            <h1 className={'primary-heading'} id={'schedule_heading'}>Day Schedule</h1>
            <h2 className={'secondary-heading'} id={'schedule_subtitle'}>Please note that the schedule/venues may be subject to change, and
                participants will be mailed updated details in such a case.</h2>

            <div className={'card'} id={'schedule_card'}>
                <ul className={'list'} id={'schedule_list'}>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>7:30 to 8:00</p>
                        <p className={'schedule_description'}>Registration Time (Participants to come to registration
                            table)</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>8:00 to 8:30</p>
                        <p className={'schedule_description'}>Opening Ceremony (Main Auditorium)</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>8:45 to 12:30</p>
                        <p className={'schedule_description'}>Root Issue (Academic Block, rooms will be shared at a
                            later date)</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>9:00 to 12:30</p>
                        <p className={'schedule_description'}>Excellence Expo (Galleria outside Main Auditorium)</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>9:00 to 12:00</p>
                        <p className={'schedule_description'}>Test Tube (Main Auditorium For senior, Admin
                            Auditorium for junior)</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>9:00 to 11:30</p>
                        <p className={'schedule_description'}>Pencilin Preparation (Admin Block Exam Rooms,
                            further details will be shared at a later date)</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>11:30 to 12:15</p>
                        <p className={'schedule_description'}>Pencilin Presentation (Admin Block Exam Rooms,
                            further details will be shared at a later date)</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>12:30 to 1:00</p>
                        <p className={'schedule_description'}>Test Tube (Main Auditorium For senior, Admin
                            Auditorium for junior)</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>9:00 to 12:00</p>
                        <p className={'schedule_description'}>Lunch Break</p>
                    </li>
                    <li className={'schedule_item'}>
                        <p className={'schedule_timing'}>1:00 to 1:50</p>
                        <p className={'schedule_description'}>Closing Ceremony and dispersal (Main Auditorium)</p>
                    </li>
                </ul>
            </div>
        </div>
    </>;
    return div
}

export default Landing_Section3;