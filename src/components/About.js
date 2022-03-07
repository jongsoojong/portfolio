import React, { useEffect, useState } from 'react'
import Jong from '../assets/images/Jong.jpeg'

export const About = () => {

    const [age, setAge] = useState(0);
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear()

    useEffect(()=> {
        setAge(todayYear - 1988);
    }, [])


    return (
        <div className='content-container'>
            <div className='about content-section' data-section-name="about">
                <h2 className='content__title'>About Me</h2>
                <div className='about__content'>
                    <div className="about__bio">
                        <div className='about__bio-image__container'>
                            <img className='about__bio-image' src={Jong} alt='jongsooyoon' />
                        </div>
                        <div className='about__bio-description'>
                            <div className='about__bio-intro'>
                                <div className='about__bio-age'>
                                    <h4 className="content__subtitle">Age</h4> 
                                    <p>{ age }</p>
                                </div>
                                <div className='about__bio-interests'>
                                    <h4 className="content__subtitle">Interests</h4>
                                    <p>
                                        Tech, Reading, Video Games, Trivia, and History.
                                    </p>
                                </div>
                                <div className='about__bio-synopsis'>
                                    <h4 className="content__subtitle">About Me</h4>
                                    <p>
                                        I'm the Front-End Developer based in Irvine, CA. <br></br>
                                        I love conjuring ideas and then turning those ideas into reality. <br></br>
                                        I have a passion for web development and creating innovative websites <br></br>
                                        Let's work on a project together!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
