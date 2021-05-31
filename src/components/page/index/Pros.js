import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from '../../Image';

import LabelText from '../../LabelText';

const Pros = () => {
  const { pros } = useStaticQuery(graphql`
    query ProsQuery {
      pros: allFile(
        filter: { sourceInstanceName: { eq: "pros" }, extension: { eq: "md" } }
        sort: { order: ASC, fields: childMarkdownRemark___frontmatter___order }
      ) {
        edges {
          node {
            sourceInstanceName
            childMarkdownRemark {
              html
              frontmatter {
                title
                order
                icon {
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
      <div className="container mx-auto text-center py-8">
        <LabelText className="text-gray-600 text-xl mb-4">Bénéfices</LabelText>
        <div className="flex flex-col sm:flex-row pt-8 lg:px-24">
          {pros.edges.map(({ node }, index) => (
            <div key={index} className="w-full sm:w-1/3">
              <Image
                image={node.childMarkdownRemark.frontmatter.icon}
                title={node.childMarkdownRemark.frontmatter.title}
                className={'w-8 mx-auto text-secondary'}
              />
              <p className="text-lg lg:text-xl xl:text-3xl mt-2 font-semibold text-primary">
                {node.childMarkdownRemark.frontmatter.title}
              </p>
              <p
                className="text-center  mb-6 mt-4 px-6"
                dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Pros;
