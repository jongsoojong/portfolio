import React, { Component } from 'react';
import { ReactComponent as Github } from '../assets/icons/github-sign.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin-logo.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Email } from '../assets/icons/close-envelope.svg';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul className="footer__buttons">
                    <li className="footer__button">
                        <a href="">
                            <LinkedIn />
                        </a>
                    </li>
                    <li className="footer__button">
                        <a href="">
                            <Github />
                        </a>
                    </li>
                    <li className="footer__button">
                        <a href="">
                            <Instagram />   
                        </a>
                    </li>
                    <li className="footer__button">
                        <a href="">
                            <Email />    
                        </a>
                    </li>
                </ul>
                <div className="jongsooyoon"> JONGSOO YOON 2019</div>
            </div>
        )
    }
}

export default Footer

