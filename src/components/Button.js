import React from 'react';

const sizes = {
  xs: `py-1 px-4 border text-sm font-semibold`,
  default: `py-2 px-6 border-2 font-bold`,
  lg: `py-2 px-8 border-4 font-bold text-lg font-bold`,
  xl: `py-4 px-16 border-4  text-xl font-bold text-lg font-bold`,
};

const Button = ({ children, type = 'button', className = '', size = 'default' }) => {
  return (
    <button
      className={`
        ${sizes[size]}
        ${className}
        border-alert-lighter
        bg-white
        text-alert-lighter
        rounded-2xl
        hover:bg-alert-lighter
        hover:text-white
        cursor-pointer
        text-center
    `}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
