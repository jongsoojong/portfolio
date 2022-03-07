import React, { Component } from 'react'
import { About } from './About';
import { Skills } from './Skills'
import { Work } from './Work';
import { Projects } from './Projects';
import { Carousel } from './Carousel';


export const Content = () => {
        return (
            <div className='content'>
                <About />
                <Skills />
                <Work />
                <Projects />
                <Carousel />
            </div>
        )
}
