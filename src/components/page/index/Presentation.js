import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ButtonLink from '../../ButtonLink';

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
    <div className="container mx-auto text-center  px-2 md:px-12 lg:px-24 xl:px-32">
      <div className="flex flex-col sm:flex-row sm:-mx-3">
        <div className="flex-1 px-3">
          <div
            className="mb-8 mt-2 text-xl   text-primary"
            dangerouslySetInnerHTML={{ __html: presentation.childMarkdownRemark.html }}
          ></div>
          <ButtonLink content="Découvez WWOM" />
        </div>
      </div>
    </div>
  );
};
export default Presentation;
