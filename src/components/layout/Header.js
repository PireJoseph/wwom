import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import { ReactComponent as SiteLogo } from './../../content/site/logo.svg';
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
          }
        }
      }
    }
  `);

  return (
    <header className="fixed w-full top-0 bg-white shadow p-4 ">
      <div className="container mx-auto h-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex  items-center justify-center text-2xl">
          <div className="4xl ">
            <Link to="/">
              <SiteLogo className="w-28" />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items center justify-center">
          {links.map((link, index) => (
            <AnchorLink key={index} className="p-4 " href={'#' + link.id}>
              {link.label}
            </AnchorLink>
          ))}
        </div>
        <DiscoverLink size="xs " />
      </div>
    </header>
  );
};

export default Header;
