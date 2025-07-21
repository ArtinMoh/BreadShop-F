// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './assets/style.css';

import BreadShopLogo from './assets/images/BreadShop - Logo.svg';
import The1stBread from './assets/images/The1stBread.png';
import EllipseBlurinmain from './assets/images/Ellipse (Blur in main).svg';
import XIcon from './assets/images/SocialMedia-Icons/X.svg';
import InstagramIcon from './assets/images/SocialMedia-Icons/Instagram.svg';

// Add your other bread images here
import BreadImg2 from './assets/images/BreadImg2.png';
import BreadImg3 from './assets/images/BreadImg3.png';


//Components
import BreadHeader from './Bread_Header.jsx';
import BreadFooter from './Bread_Footer.jsx'


import { Button, Checkbox, Chip, } from './UI_elements.jsx';



import Tooltip from '@mui/material/Tooltip';


import { useEffect, useRef, useState } from "react";
function App() {
  const scrollBarsRef = useRef([]);
  const breadImages = [The1stBread, BreadImg2, BreadImg3];
  const [breadIndex, setBreadIndex] = useState(0);
  const [slideClass, setSlideClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const [showFooter, setShowFooter] = useState(true);


  const setActiveBar = (index) => {
    scrollBarsRef.current.forEach((bar, i) => {
      if (bar) {
        bar.classList.toggle("active-Scrollbar", i === index);
        bar.classList.toggle("non-active-Scrollbar", i !== index);
      }
    });
  };

  useEffect(() => {
    setActiveBar(0); // Default active

    const featuredSection = document.getElementById("featured-breads");
    const footerSection = document.querySelector("footer");

    const featuredObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveBar(entry.isIntersecting ? 1 : 0);
        });
      },
      { threshold: 0.3 }
    );

    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveBar(entry.isIntersecting ? 2 : 1);
        });
      },
      { threshold: 0.3 }
    );

    if (featuredSection) featuredObserver.observe(featuredSection);
    if (footerSection) footerObserver.observe(footerSection);

    return () => {
      featuredObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  // Handler for image click
  const handleBreadClick = () => {
    if (isAnimating) return; // Prevent click during animation
    setIsAnimating(true);
    setSlideClass('slide-out');
    setTimeout(() => {
      setBreadIndex((prev) => (prev + 1) % breadImages.length);
      setSlideClass('slide-in');
    }, 300);
    setTimeout(() => {
      setSlideClass('');
      setIsAnimating(false); // Re-enable click after animation
    }, 600);
  };

  return (
    <>
      <BreadHeader/>

      <div id="mainsContainer">
        <main>
          <h1>
            Delicious Homemade <br />
            Bread
          </h1>
          <p>
            Using only the finest ingredients to create fresh, artisanal bread
            for you to enjoy.
          </p>
          <button className="shop-button">See All Breads Now!!</button>
        </main>

        <aside id="asideInmain">
          <div id="asideImgContainer">
            <img
              src={breadImages[breadIndex]}
              alt="Freshly baked bread"
              onClick={handleBreadClick}
              style={{ cursor: isAnimating ? 'not-allowed' : 'pointer', opacity: isAnimating ? 0.7 : 1 }}
              className={slideClass}
            />
          </div>
          <div id="Blur-in-main">
            <img src={EllipseBlurinmain} alt="" />
          </div>
        </aside>
      </div>

      <div id="scrollBar">
        {[0, 1, 2].map((_, i) => (
          <span
            key={i}
            ref={(el) => (scrollBarsRef.current[i] = el)}
            className="non-active-Scrollbar"
          ></span>
        ))}
      </div>


      <section id="featured-breads">
        <h2>Featured Breads</h2>
        <div className="featured-grid">
          <div className="featured-item"></div>
          <div className="featured-item"></div>
          <div className="featured-item"></div>
          <div className="featured-item"></div>
          <div className="featured-item"></div>
          <div className="featured-item"></div>
          <Tooltip title="Example of a Tooltip" followCursor>
          <Button 
          style={{color: '#222222', backgroundColor: '#f7e7d3'}}
          onClick={() => setShowFooter(!showFooter)}>
        {showFooter ? 'Hide Footer' : 'Show Footer'}
      </Button>
      </Tooltip>
        </div>
      </section>

      {showFooter && <BreadFooter/>}
    </>
  );
}

export default App
