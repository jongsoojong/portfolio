import React, { Component } from 'react';
import { jsxOpeningElement } from '@babel/types';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll;
    }

    componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight})
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.setState({scroll: window.scrollY});
    }

    render() {
        return (
            <nav className={this.state.scroll > this.state.top ? "header header--sticky" : "header"}>
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