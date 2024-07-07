import React, { useRef, useEffect } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  

  useEffect(() => {
    const updateCursorPosition = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorRef.current.style.left = x + 'px';
      cursorRef.current.style.top = y + 'px';
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const handleCursorResize = (scale) => {
    cursorRef.current.style.width = `${scale}px`;
    cursorRef.current.style.height = `${scale}px`;
  };

  return (
    <div
      ref={cursorRef}
      className="w-8 h-8 border-2 border-grey rounded-full fixed transform -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-difference transition-transform duration-200 ease-in-out"
      style={{ width: '60px', height: '60px' }}
    ></div>
  );
};

export default CustomCursor;
