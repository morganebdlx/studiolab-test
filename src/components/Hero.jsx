import React from 'react';
import './Hero.css';
//import heroImage from '../assets/V7_hero_desktop.png';
//import heroImageMobile from '../assets/V7_hero_mobile.png';
import logo from '../assets/V7_logo.svg';


const Hero = () => {

  return (
    <div className="hero">
      <div className="logo">
        <img src={logo} alt="V7LVET Logo" />
      </div>
      <div className="hero-text">
        <h1>V7LVET</h1>
        <p>Your one-stop solution for all your needs.</p>
      </div>
    </div>
  );
}
export default Hero;
