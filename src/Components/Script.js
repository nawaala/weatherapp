// script.js
import './Script.css'
import React, { useEffect } from 'react';

const Toggle = () =>{
    useEffect (( => {
        const menuToggle = document.querySelector('.toggle');
        const showcase = document.querySelector('.showcase');
            
        const handleClick = () => {
            menuToggle.classList.toggle('active');
            showcase.classList.toggle('active');
            };

            menuToggle.addEventListener('click', handleClick);
            
        const menuToggle = document.querySelector('.toggle');
        const showcase = document.querySelector('.showcase');
        
        menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
        </div>
    
  
    )
}
;
});

export default Toggle;
