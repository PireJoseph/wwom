import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as SiteLogo } from './../../content/site/logo.svg';
import ButtonLink from '../ButtonLink';

import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
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
    <header className="fixed w-full top-0 bg-white shadow p-4 h-16">
      <div className="container mx-auto h-full flex flex-row justify-between items-center">
        <div className="flex  items-center justify-center text-2xl">
          <div className="4xl ">
            <Link to="/">
              <SiteLogo className="w-28" />
            </Link>
          </div>
        </div>
        <ButtonLink size="xs" link="/decouvrir" />
      </div>
    </header>
  );
};

export default Header;
