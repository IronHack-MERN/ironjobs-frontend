import React from 'react';

const Button = ({ children, myProp }) => {
  return (
    <button className="button-primary u-full-width" onClick={myProp}>
      {children}
    </button>
  );
};

export default Button;