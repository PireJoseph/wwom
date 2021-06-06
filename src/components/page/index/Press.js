import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LabelText from '../../LabelText';
import Image from '../../Image';

const Press = () => {
  const { press } = useStaticQuery(graphql`
    query PressQuery {
      press: allFile(
        filter: { sourceInstanceName: { eq: "indexPress" }, extension: { eq: "md" } }
        sort: { order: ASC, fields: childMarkdownRemark___frontmatter___order }
      ) {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              html
              frontmatter {
                title
                heading
                order
                url
                image: logo {
                  id
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="">
        <h3 className="text-primary-lighter text-3xl leading-none font-bold mb-4 text-center">
          Ils parlent du bouche à oreille
        </h3>
        <div className="mt-12 py-6 flex flex-col sm:flex-row justify-between items-center align-center border-t-2 border-b-2 border-alert lg:w-3/4 mx-auto">
          {press.edges.map(({ node }, index) => (
            <a
              key={index}
              href={node.childMarkdownRemark.frontmatter.url}
              title={node.childMarkdownRemark.frontmatter.title}
            >
              <Image
                className="w-24 my-4 sm:my-0"
                image={node.childMarkdownRemark.frontmatter.image}
                title={node.childMarkdownRemark.frontmatter.title}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default Press;
