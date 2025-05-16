import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../assets/V7_hero_desktop.png';
//import heroImageMobile from '../assets/V7_hero_mobile.png';
import logo from '../assets/V7_logo.svg';
import burger from '../assets/menu-burger.png';



const Hero = () => {

  const [step, setStep] = useState(1);

  useEffect(() => {
    const animation1 = setTimeout(() => setStep(2), 1000);
    const animation2 = setTimeout(() => setStep(3), 2500);

    return () => {
      clearTimeout(animation1);
      clearTimeout(animation2);
    };
  }, []);

  return (
    <div className={`hero step-${step}`}>

      <div className="logo">
        <img src={logo} alt="V7LVET Logo" />
      </div>
      <div className="menu-burger">
        <img src={burger} alt="Menu burger" />
      </div>
      <div className={`hero-text-left cabin-font ${step >= 2 ? "visible" : ""}`}>
        <p>V7LVET</p>
      </div>
       <div className="animation-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
      <div className={`hero-text-right cabin-font ${step >= 2 ? "visible" : ""}`}>
        <p>Design the Structure, Drive the Future</p>
      </div>
    </div>
  );
}
export default Hero;
