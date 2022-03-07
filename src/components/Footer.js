import React, { Component } from 'react';
import { ReactComponent as Github } from '../assets/icons/github-sign.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin-logo.svg';
import { ReactComponent as Email } from '../assets/icons/close-envelope.svg';
import { ReactComponent as CV } from '../assets/icons/cv.svg';

export const Footer = () => {
    let todayDate = new Date();
    const thisYear = todayDate.getFullYear();


    return (
        <div className="footer">
            <ul className="footer__buttons">
                <li className="footer__button">
                    <a aria-label="linkedIn" target="_blank" href="https://www.linkedin.com/in/jongsooyoon/">
                        <LinkedIn />
                    </a>
                </li>
                <li className="footer__button">
                    <a aria-label="github" target="_blank" href="https://github.com/jongsoojong">
                        <Github />
                    </a>
                </li>
                <li className="footer__button">
                    <a aria-label="Resume / CV" target="_blank" href="https://docs.google.com/document/d/1Fu1C6dI6dclBwV_EJqwQdQpPpzlqPT-VDpDkWvAMsoo/edit?usp=sharing">
                        <CV />    
                    </a>
                </li>
                <li className="footer__button">
                    <a aria-label="Email" target="_blank" href="mailto:jongsoojong@gmail.com">
                        <Email />    
                    </a>
                </li>
            </ul>
            <div className="jongsooyoon"> JONGSOO YOON {thisYear}</div>
        </div>
    )
}

