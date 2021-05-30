import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({
  className = '',
  children,
  logoShown = true,
  contactShown = true,
  links = [],
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-between  overflow-x-hidden">
      <Header logoShown={logoShown} contactShown={contactShown} links={links} />
      <main className={className + ' text-gray-900'}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
