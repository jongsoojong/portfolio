import React, { Component } from 'react';
import { jsxOpeningElement } from '@babel/types';

class Header extends Component {
    header = document.getElementsByClassName('header');
    sticky = this.header.offsetTop;

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (window.pageYOffset > this.sticky) {
            console.log('greater-than')
        } else {
            console.log(window.pageYOffset);
            console.log(this.header.offsetTop)
            console.log(this.header)
            console.log('less-than')
        }
    }

    render() {
        return (
            <nav className="header">
                <ul className="header__buttons">
                    <li className="header__button"><a href="#intro">About</a></li>
                    <li className="header__button"><a href="#skills">Skills</a></li>
                    <li className="header__button"><a href="#work">Experience</a></li>
                    <li className="header__button"><a href="#projects">Projects</a></li>
                    <li className="header__button"><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header;