import React from 'react';
import { Link } from 'gatsby';

const sizes = {
  xs: `py-1 px-4 border-2 text-sm font-semibold`,
  default: `py-2 px-8 border-4 font-bold`,
  lg: `py-2 px-12 border-4 font-bold text-lg font-bold`,
  xl: `py-4 px-16 text-xl border-4 font-bold text-lg font-bold`,
};

const ButtonLink = ({ className = '', size = 'default', link = '/', content = 'Découvrir' }) => {
  return (
    <Link
      to={link}
      type="button"
      className={`
        ${sizes[size]}
        ${className}
        border-alert-lighter
        bg-transparent
        text-alert-lighter
        rounded-2xl
        hover:bg-alert-lighter
        hover:text-white
        
    `}
    >
      {content}
    </Link>
  );
};

export default ButtonLink;
