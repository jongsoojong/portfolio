import React, {useState, useEffect, useRef} from 'react';
import Pic1 from '../assets/images/pic1.jpg';
import Pic2 from '../assets/images/pic2.jpg'; 
import Pic3 from '../assets/images/pic3.jpg'; 
import Pic4 from '../assets/images/pic4.jpg'; 

export const Carousel = () => {

    //Get ButtonDots to work
    //Div Object setup
    //https://getbootstrap.com/docs/4.0/components/carousel/ use that as example minus 

    const imageArray = [Pic1, Pic2, Pic3, Pic4];
    const theRef = useRef();

    const [arrayIndexState, setArrayIndexState] = useState(0);

    const prevButton = () => {
        clearTimeout(theRef.current);
        arrayIndexState > 0 ? setArrayIndexState(arrayIndexState - 1 ) : setArrayIndexState( imageArray.length -1);
    }

    const nextButton = () => {
        clearTimeout(theRef.current);
        arrayIndexState < imageArray.length -1 ? setArrayIndexState(arrayIndexState +1 ) : setArrayIndexState(0);
    }

    useEffect(() => {   
        theRef.current = setTimeout(() => {
            arrayIndexState < imageArray.length -1 ? setArrayIndexState(arrayIndexState +1 ) : setArrayIndexState(0);
        }, 3000)
        return () => clearTimeout(theRef.current)
    }, [arrayIndexState] )


    return (
        <div className="carousel">
            <div className="carousel-btn-container btn--prev">
                <button className="carousel-btn" onClick={() => prevButton()}> PREV </button>
            </div>
            <div className="carousel-image">
                <img src={imageArray[arrayIndexState]} />
            </div>
            <div className="carousel-btn-container btn--next">
            <button className="carousel-btn" onClick={() => nextButton()}> NEXT </button>
            </div>
        </div>
    )



}