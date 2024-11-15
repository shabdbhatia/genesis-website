import React from 'react';
import './../styling/landing_section1_style.css';

const Landing_Section1 = () => {
    return (
        <div className={'container'} id={'landing_s1_div'}>
            <div className={'logo_div'} id={'logo_div_s1'}>
                <img src={require('./../../Assets/Logo_Placeholder.jpeg')} alt={'genesis_logo'} className={'logo'} id={'genesis_s1_logo'}/>
            </div>
            <div className={'heading_div'} id={'heading_div_s1'}>
                <h1 className={'genesis_heading_h1'}>Genesis 2024</h1>
                <h2 className={'genesis_heading_h2'}>December 7th 2024</h2>

                <div className={'button_div'} id={'button_div_register'}>
                    <button className={'button_register'} onClick={() => {}} id={'register_button_s1'}>Register Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Landing_Section1;