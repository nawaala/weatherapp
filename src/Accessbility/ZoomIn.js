import './ZoomIn.css'
import React, { useState } from 'react';

const ResizableText = () => {
  const [fontSize, setFontSize] = useState(16); // Initial font size in pixels

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2); // Increase font size by 2 pixels
    document.body.style.fontSize = `${fontSize + 2}px`; // Set body font size
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(12, prevSize - 2)); // Decrease font size by 2 pixels, but keep a minimum size of 12 pixels
    document.body.style.fontSize = `${Math.max(12, fontSize - 2)}px`; // Set body font size
  };

  return (
    <div>
      <button className='fixed' onClick={increaseFontSize}>Increase Font Size</button>
      <button className='fixed' onClick={decreaseFontSize}>Decrease Font Size</button>
    </div>
  );
};

export default ResizableText;

