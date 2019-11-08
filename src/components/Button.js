import React from 'react';

const Button = ({ children, link }) => {
  function handleClick(e) {
    e.preventDefault()
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;