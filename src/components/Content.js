import React, { Component } from 'react'
import About from './About';
import Skills from './Skills'
import Work from './Work';
import Projects from './Projects';


export class Content extends Component {
    render() {
        return (
            <div className='content'>
                <About />
                <Skills />
                <Work />
                <Projects />
            </div>
        )
    }
}

export default Content
