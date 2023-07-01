// Home.js

import React from 'react';
import './Home.css';
import shoppingImage from './images/shopping.png';
import { CSSTransition } from 'react-transition-group';

export default function Home() {
  const animationDuration = 500; // Animation duration in milliseconds

  return (
    <div className='home-container'>
      <CSSTransition
        in={true}
        appear={true}
        timeout={animationDuration}
        classNames='fade'
      >
        <div className='home-content'>
          <h1 className='home-title'>Start Shopping with Celebal Store . </h1>
          <p className='home-description'>
            Explore our wide range of products and add them to your cart to start shopping.
          </p>
        </div>
      </CSSTransition>
      <img src={shoppingImage} alt='Shopping' className='home-image' />
    </div>
  );
}
