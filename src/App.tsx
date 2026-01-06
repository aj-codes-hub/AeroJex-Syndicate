import React, { useEffect } from 'react';
import Home from './Pages/Home/Home';

const App: React.FC = () => {
  useEffect(() => {
    const SCROLL_SPEED = 0.1; // Fixed 30% speed
    
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // Allow zoom
      e.preventDefault();
      
      window.scrollBy({
        top: e.deltaY * SCROLL_SPEED,
        behavior: 'instant'
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;