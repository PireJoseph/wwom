import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../Button';
import Image from '../Image';

const Hero = () => {
  const { hero } = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(name: { eq: "hero" }) {
        childMarkdownRemark {
          html
          frontmatter {
            title
            action
            image {
              publicURL
              absolutePath
              relativePath
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  `);

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
        <Image
          image={hero.childMarkdownRemark.frontmatter.image}
          title={hero.childMarkdownRemark.frontmatter.title}
        />
      </div>
    </div>
  );
};
export default Hero;
