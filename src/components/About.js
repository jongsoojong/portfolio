import React, { Component } from 'react'
import Jong from '../assets/images/Jong.jpeg'

export class About extends Component {
    render() {
        return (
            <div className='content-container'>
                <div className='about content-section'>
                    <h2 className='about__title'>About</h2>
                    <div className='about__content'>
                        <div className="about__bio">
                            <div class='about__bio-image__container'>
                                <img className='about__bio-image' src={Jong} alt='jongsooyoon' />
                            </div>
                            <div className='about__bio-description'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
