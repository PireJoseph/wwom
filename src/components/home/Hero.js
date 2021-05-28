import React from 'react';

import HeroImage from '../../svg/HeroImage';
import Button from '../../components/Button';

import { useContentHero } from '../../hooks/use-content-hero';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  const { hero } = useContentHero();
  const heroImagePublicPath = '../../../static' + hero.childMarkdownRemark.frontmatter.image;
  return (
    <div className="container mx-auto px-8 lg:flex">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
          {hero.childMarkdownRemark.frontmatter.title}
        </h1>
        <p className="text-xl lg:text-2xl mt-6 font-light">
          {hero.childMarkdownRemark.frontmatter.action}
        </p>
        <p className="mt-8 md:mt-12">
          <Button size="lg">Découvrir</Button>
        </p>
      </div>
      <div className="lg:w-1/2">
        {heroImagePublicPath}
        <StaticImage
          src={'../../../static/assets/heroImage.svg'}
          formats={['auto', 'webp', 'avif']}
          alt={hero.childMarkdownRemark.frontmatter.title}
        />
      </div>
    </div>
  );
};
export default Hero;
