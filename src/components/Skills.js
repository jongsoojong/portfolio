import React, { useEffect, useState } from 'react';
import { ReactComponent as Css } from '../assets/icons/css3.svg';
import { ReactComponent as Git } from '../assets/icons/git.svg';
import { ReactComponent as Html } from '../assets/icons/html5.svg';
import { ReactComponent as Javascript } from '../assets/icons/javascript.svg';
import { ReactComponent as Jquery } from '../assets/icons/jquery.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';


export default function Skills() {
    
    return (
        <div className="content-container">
            <div className="skill content-section">
            <h2 className='content__title'>SKILLS</h2>
                <div className="skills__container">
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Javascript />
                        </div>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Html />
                        </div>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Css />
                        </div>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <ReactIcon />
                        </div>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Jquery />
                        </div>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Git />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
