import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import Image from '../Image';

import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(name: { eq: "site" }) {
        childMarkdownRemark {
          html
          frontmatter {
            title
            logo {
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
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className=" mr-3 4xl">
            <Image
              image={hero.childMarkdownRemark.frontmatter.logo}
              title={hero.childMarkdownRemark.frontmatter.title}
            />
          </div>
        </div>
        <div className="flex mt-4 sm:mt-0">
          <AnchorLink className="px-4" href="#presentation">
            Présentation
          </AnchorLink>
          <AnchorLink className="px-4" href="#services">
            Services
          </AnchorLink>
          <AnchorLink className="px-4" href="#testimonial">
            Témoignages
          </AnchorLink>
          <AnchorLink className="px-4" href="#press">
            Presse
          </AnchorLink>
        </div>
        <div className="hidden md:block">
          <Button className="text-sm">Découvrir</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
