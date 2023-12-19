// script.js
import './Toggle.css'
import closeImage from"../Assets/close.png"
import React, { useEffect, useState } from 'react';


const Toggle = () => {

    const [isOpen, setIsOpen] = useState(false);


    // useEffect( () => {
    //     const menuToggle = document.querySelector ('.toggle');
    //     const showcase = document.querySelector ('.showcase');

    //     const handleClick = () => {
    //         menuToggle.classList.toggle ('active');
    //         showcase.classList.toggle('active');
    //     };

    //     menuToggle.addEventListener ('click', handleClick);

    //     return () => {
    //         menuToggle.removeEventListener('click', handleClick);
    //     };
    // }, []);

    return (
        <>
            <div className='toggle' onClick={() =>setIsOpen(!isOpen)}>
            </div>
            {
                isOpen && <div className="menu">
                    <ul>
                        <button onClick={()=>setIsOpen(false)} className="close-button"><img src={closeImage}/> </button>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Destination</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        
                    </ul>
                </div>

            }
        </>
    )


};
export default Toggle;
