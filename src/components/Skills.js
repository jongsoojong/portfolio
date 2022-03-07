import React from 'react';
import { ReactComponent as Css } from '../assets/icons/css3.svg';
import { ReactComponent as Git } from '../assets/icons/git.svg';
import { ReactComponent as Html } from '../assets/icons/html5.svg';
import { ReactComponent as Javascript } from '../assets/icons/javascript.svg';
import { ReactComponent as Jquery } from '../assets/icons/jquery.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import Shopify from '../assets/images/Shopify.png'



export const Skills = () => {
    
    return (
        <div className="content-container">
            <div className="skill content-section" data-section-name="skills">
            <h2 className='content__title'>SKILLS</h2>
                <div className="skills__container">
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Javascript />
                        </div>
                        <h3 className="skill__icon-title"> Javascript </h3>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Html />
                        </div>
                        <h3 className="skill__icon-title"> HTML </h3>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Css />
                        </div>
                        <h3 className="skill__icon-title"> CSS </h3>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <img className="skill__icon-picture" src={Shopify} alt='Shopify' />
                        </div>
                        <h3 className="skill__icon-title"> Shopify </h3>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <ReactIcon />
                        </div>
                        <h3 className="skill__icon-title"> React </h3>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Jquery />
                        </div>
                        <h3 className="skill__icon-title"> Jquery </h3>
                    </div>
                    <div className="skill__icon-container">
                        <div className="skill__icon">
                            <Git />
                        </div>
                        <h3 className="skill__icon-title"> Git </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
