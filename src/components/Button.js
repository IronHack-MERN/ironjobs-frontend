import React from 'react';

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name } = props;
  return (
    <button >
      {name}
    </button>
  );
};

export default Button;