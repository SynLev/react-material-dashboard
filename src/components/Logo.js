import React from 'react';

const Logo = (props) => {
  return (
    <img
      height={40}
      width={40}
      alt="Logo"
      src="/static/images/tellor_logo_no_text.png"
      {...props}
    />
  );
};

export default Logo;
