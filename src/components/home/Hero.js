import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import HeroImage from '../../svg/HeroImage';
import Button from '../../components/Button';

const Hero = ({ className, children }) => (
  <div className="container mx-auto px-8 lg:flex">
    <div className="text-center lg:text-left lg:w-1/2">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">WWOM</h1>
      <p className="text-xl lg:text-2xl mt-6 font-light">
        Obtenez plus de clients fidèles automatiquement.
      </p>
      <p className="mt-8 md:mt-12">
        <Button size="lg">Découvrir</Button>
      </p>
      <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
    </div>
    <div className="lg:w-1/2">
      <HeroImage />
    </div>

    {/* <StaticQuery
      query={graphql`
      query 
    `}
      render={(data) => <>
      
      </>}
    /> */}
  </div>
);
export default Hero;
