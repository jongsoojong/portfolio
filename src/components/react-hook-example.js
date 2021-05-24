import React, { useEffect, useState } from 'react'
import Jong from '../assets/images/Jong.jpeg'

export default function Example() {
    const [bio, setBio] = useState('')

    const [count, setCount] = useState(0);
    
    const handleInputChange = (e) => {
        setBio(e.target.value);
    };

    return (
        <div className='content-container'>
            <div className='about content-section'>
                <h2 className='about__title'>About Jong</h2>
                <div className='about__content'>
                    <div className="about__bio">
                        <div className='about__bio-image__container'>
                            <img className='about__bio-image' src={Jong} alt='jongsooyoon' />
                        </div>
                        <input className="jong_input" onChange={ handleInputChange }></input>
                        <div className='about__bio-description'>
                            { bio }
                        </div>
                        <h1> you clicked this button {count} times </h1>
                        <button onClick={ () => setCount(count + 1) }> CLICK ME </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
