import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Card from '../Card';
import DiscoverLink from '../DiscoverLink';

const Presentation = () => {
  const { presentation } = useStaticQuery(graphql`
    query PresentationQuery {
      presentation: file(name: { eq: "presentation" }) {
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
    <div className="container mx-auto text-center py-8 md:pt-64  px-2 md:px-12 lg:px-24 xl:px-32 text-primary">
      <h2 className="text-3xl lg:text-5xl font-semibold text-primary-darker">
        {presentation.childMarkdownRemark.frontmatter.title}
      </h2>
      <div className="flex flex-col sm:flex-row sm:-mx-3">
        <div className="flex-1 px-3">
          <div
            className="mb-8 mt-2 text-xl font-light leading-loose text-xl"
            dangerouslySetInnerHTML={{ __html: presentation.childMarkdownRemark.html }}
          ></div>
          <DiscoverLink />
        </div>
      </div>
    </div>
  );
};
export default Presentation;
