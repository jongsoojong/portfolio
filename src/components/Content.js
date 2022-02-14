import React, { Component } from 'react'
import About from './About';
import Skills from './Skills'
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';
import Example from './react-hook-example';


export default function Content() {
        return (
            <div className='content'>
                { About() }
                { Skills() }
                { Work() }}
                <Projects />
                <Contact />
                { Example() }
            </div>
        )
}
