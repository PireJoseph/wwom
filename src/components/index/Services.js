import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SplitSection from '../SplitSection';

import Image from '../Image';

const Services = () => {
  let { services } = useStaticQuery(graphql`
    query ServicesQuery {
      services: allFile(
        filter: { sourceInstanceName: { eq: "services" }, extension: { eq: "md" } }
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

  let serviceJSX = services.edges
    .sort(({ node: nodeA }, { node: nodeB }) => {
      return nodeA.childMarkdownRemark.frontmatter.order <
        nodeB.childMarkdownRemark.frontmatter.order
        ? -1
        : +1;
    })
    .map(({ node }, index) => {
      return (
        <SplitSection
          key={index}
          reverseOrder={!(index % 2 === 0)}
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
                {node.childMarkdownRemark.frontmatter.title}
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
                {node.childMarkdownRemark.frontmatter.text}
              </p>
            </div>
          }
          secondarySlot={
            <Image
              image={node.childMarkdownRemark.frontmatter.picture}
              title={node.childMarkdownRemark.frontmatter.title}
            />
          }
        />
      );
    });

  return (
    <>
      {serviceJSX}
      {/* <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will analyse and evaluate how your company stacks
              against the closest competitors
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Design And Plan Your Business Growth Steps
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Search For Performance Optimization
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      /> */}
    </>
  );
};
export default Services;
