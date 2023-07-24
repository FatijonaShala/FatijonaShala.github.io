import React from 'react';
import Typed from 'react-typed';
import "../style/intro.css";

const TypingAnimation = () => {
  const typedString = "hi, Fatijona here!";

  return (
    <Typed
      strings={[typedString]}
      typeSpeed={120}
      backSpeed={60}
      className="intro-title intro-name"
    />
  );
};



export default TypingAnimation;

