import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';

import Image from '../Image';
import DiscoverLink from '../DiscoverLink';

import { useStaticQuery, graphql } from 'gatsby';

const Header = ({ logoShown = true, contactShown = true, links = [] }) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site: file(name: { eq: "site" }) {
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
    <header className="sticky top-0 bg-white shadow ">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className=" mr-3 4xl">
            <Link to="/">
              <Image
                className="w-32"
                image={site.childMarkdownRemark.frontmatter.logo}
                title={site.childMarkdownRemark.frontmatter.title}
              />
            </Link>
          </div>
        </div>
        <div className="flex mt-4 sm:mt-0">
          {links.map((link, index) => (
            <AnchorLink key={index} className="px-4" href={'#' + link.id}>
              {link.label}
            </AnchorLink>
          ))}
        </div>
        <div className="hidden md:block">
          {/* <Link to="/decouvrir">Découvrir</Link> */}
          <DiscoverLink size="xs" />
        </div>
      </div>
    </header>
  );
};

export default Header;
