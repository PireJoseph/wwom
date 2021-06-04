import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SplitSection from '../../SplitSection';

import Image from '../../Image';

const Services = () => {
  const { services } = useStaticQuery(graphql`
    query ServicesQuery {
      services: allFile(
        filter: { sourceInstanceName: { eq: "indexServices" }, extension: { eq: "md" } }
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
                text
                picture {
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
      {services.edges.map(({ node }, index) => (
        <SplitSection
          key={index}
          reverseOrder={!(index % 2 === 0)}
          className="mt-16 lg:mt-0 my-16"
          primarySlot={
            <div>
              <div className="flex flex-col justify-between items-center xl:flex-row">
                <div className="w-32 flex justify-center lg:justify-start">
                  <span className="inline-flex justify-center items-center font-bold text-3xl w-16 h-16 rounded-full bg-secondary text-white mb-4 xl:mb-0">
                    {index + 1}
                  </span>
                </div>
                <h3
                  className={
                    'inline-flex  text-center text-3xl font-bold leading-tight text-primary-darker ' +
                    (index % 2 === 0 ? 'xl:text-right' : 'xl:text-left')
                  }
                >
                  {node.childMarkdownRemark.frontmatter.text}
                </h3>
              </div>

              <p
                className="mt-8 text-xl font-light leading-relaxed pb-12"
                dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
              ></p>
            </div>
          }
          secondarySlot={
            <Image
              image={node.childMarkdownRemark.frontmatter.picture}
              title={node.childMarkdownRemark.frontmatter.title}
              className={' w-86 h-auto mx-auto'}
            />
          }
        />
      ))}
    </>
  );
};
export default Services;
