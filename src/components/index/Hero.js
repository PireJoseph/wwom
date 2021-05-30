import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import DiscoverLink from '../DiscoverLink';
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
    <div className=" bg-gradient-to-b from-secondary-lighter to-white">
      <div className="flex flex-col justify-center lg:flex-row items-center  pt-20 md:pt-40 px-8 md:px-12">
        <div className="text-center lg:text-left lg:w-1/2 lg:pl-16 xl:pl-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-primary-lighter">
            {hero.childMarkdownRemark.frontmatter.title}
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            {hero.childMarkdownRemark.frontmatter.action}
          </p>
          <p className="mt-8 md:mt-12">
            <DiscoverLink size="lg" />
          </p>
        </div>
        <div className="pt-20 lg:pt-0 lg:w-1/2">
          <Image
            className="mx-auto"
            image={hero.childMarkdownRemark.frontmatter.image}
            title={hero.childMarkdownRemark.frontmatter.title}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
