import React, {useState, useEffect, useCallback} from 'react';


export const Header = () => {
    const[scrollState, setScrollState] = useState(0);
    const[topState, setTopState] = useState(0);
    const[heightState, setHeightState] = useState(0);

    const goToSection = (thisSection) => {
        let placeToScroll = document.querySelector('[data-section-name="' + thisSection +'"]')

        window.scrollTo({
            top: placeToScroll.offsetTop, 
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const navigation = document.querySelector('nav');
        setTopState(navigation.offsetTop);
        setHeightState(navigation.offsetHeight);
    }, [])

    const handleScroll = useCallback(() => {
        setScrollState(window.scrollY)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [handleScroll])

    useEffect(() => {
        scrollState > topState ? document.body.style.paddingTop = `${heightState}px` : document.body.style.paddingTop = 0;
    }, [scrollState])

    return (
        <nav className={scrollState > topState ? "header header--sticky" : "header"}>
            <ul className="header__buttons">
                <li className="header__button"><a href="#about" onClick={ () => goToSection('about')}>About Me</a></li>
                <li className="header__button"><a href="#skills" onClick={ () => goToSection('skills')}>My Skills</a></li>
                <li className="header__button"><a href="#work" onClick={ () => goToSection('work')}>My Experience</a></li>
                <li className="header__button"><a href="#projects" onClick={() => goToSection('projects')}>Projects</a></li>
            </ul>
        </nav>
    )
}



