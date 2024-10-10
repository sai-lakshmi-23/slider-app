import React, { useEffect, useState } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.7) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: "url('https://store.playstation.com/en-in/concept/10000762')", // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  };

  const sliderStyle = {
    position: 'fixed',
    left: '50%',
    transform: isScrolled ? 'translate(-50%, -50%)' : 'translateX(-50%)',
    bottom: isScrolled ? 'auto' : '5%',
    top: isScrolled ? '50%' : 'auto',
    transition: 'all 0.3s ease',
    width: '80%',
    maxWidth: '600px',
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '10px',
    padding: '20px',
    maxHeight: '300px',
    overflowY: 'auto',
  };

  const scrollableContentStyle = {
    maxHeight: '250px',
    overflowY: 'scroll',
  };

  return (
    <div className="App">
      <div style={backgroundStyle} />
      <div style={sliderStyle}>
        <div>
          <h2 style={{ textAlign: 'center' }}>Scrollable Slider Content</h2>
          <p style={{ textAlign: 'center' }}>Scroll down to move the slider.</p>
          <div style={scrollableContentStyle}>
            {Array.from({ length: 20 }).map((_, index) => (
              <p key={index} style={{ margin: '10px 0' }}>Content line {index + 1}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
