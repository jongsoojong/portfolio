import React from 'react'

export const Intro = () => {

    const goToSection = (thisSection) => {
        let placeToScroll = document.querySelector('[data-section-name="' + thisSection +'"]')

        window.scrollTo({
            top: placeToScroll.offsetTop, 
            behavior: 'smooth'
        })
    }


    return (
        <div className='intro'>
            <div className='intro__content'>
                <h1 className='intro__title'>
                    MY NAME IS JONG AND THIS IS SOME STUFF ABOUT ME THAT IS THE INTRO BABY
                </h1>
                <button className='intro__btn'  onClick={ () => goToSection('about')}>FIND OUT MORE ABOUT ME</button>
            </div>
        </div>
    )
}