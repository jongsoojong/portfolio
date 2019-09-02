import React, { Component } from 'react'

export class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <div className='intro__content'>
                    <h1 className='intro__title'>
                        MY NAME IS JONG AND THIS IS SOME STUFF ABOUT ME THAT IS THE INTRO BABY
                    </h1>
                    <button className='intro__btn'>FIND OUT MORE ABOUT ME</button>
                </div>
            </div>
        )
    }
}

export default Intro
