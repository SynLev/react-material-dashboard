import React from 'react';

const Logo = (props) => {
  return (
    <img
      height={60}
      width={60}
      alt="Logo"
      src="/static/images/synlev_logo.jpg"
      {...props}
    />
  );
};

export default Logo;
