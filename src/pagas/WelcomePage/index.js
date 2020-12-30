import React from 'react';
import { ReactComponent as Logo } from '../../logo.svg'
import { ParallaxButton } from 'react-parallax-button'

import './style.css'

const WelcomePage = ({ startParser }) => {
  return <div>
    <Logo className="welcome-logo" />
    <div className="parser-button-container">
      <ParallaxButton text="New Parser"
        onClick={startParser}
        backgroundStyle={{
          backgroundColor: 'rgb(255,194,212)',
          background: 'linear-gradient(90deg, rgba(246,139,171,1) 0%, rgba(238,82,129,1) 46%, rgba(255,122,162,1) 100%)',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'
        }}
        textStyle={{
          fontWeight: "bold",
          fontSize: '20px',
          padding: '1.5em 2.5em 1.5em 2.5em',
          color: '#8A2846'
        }}

      />
    </div>

  </div>
}

export default WelcomePage
