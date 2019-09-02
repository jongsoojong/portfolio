import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul className="header__buttons">
                    <li className="header__button"><a href="#intro">Introduction</a></li>
                    <li className="header__button"><a href="#projects">Projects</a></li>
                    <li className="header__button"><a href="#work">Work</a></li>
                    <li className="header__button"><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        )
    }
}

export default Header;