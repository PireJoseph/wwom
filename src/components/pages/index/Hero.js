import React from 'react';
import styled from '@emotion/styled';

import Button from '../../Button';

const Hero = ({ hero }) => {
  const Img = styled.img``;

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
      <div className="lg:w-1/2 lg:h-60">
        <Img
          src={hero.childMarkdownRemark.frontmatter.image}
          loading="eager"
          alt={hero.childMarkdownRemark.frontmatter.title}
          title={hero.childMarkdownRemark.frontmatter.title}
        />
      </div>
    </div>
  );
};
export default Hero;
