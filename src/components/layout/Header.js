import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className=" mr-3 4xl">
          <LogoIcon class="w-12" />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#presentation">
          Présentation
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Fonctionnement
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Testimonial
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Sponspors
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Découvrir</Button>
      </div>
    </div>
  </header>
);

export default Header;
