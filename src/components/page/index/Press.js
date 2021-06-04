import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LabelText from '../../LabelText';
import Card from '../../Card';
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
        <LabelText className="text-gray-600 text-xl mb-4 text-center">
          Ils parlent du bouche à oreille
        </LabelText>
        <div className="pt-8 flex flex-col items-center align-center xl:flex-row  md:flex-wrap ">
          {press.edges.map(({ node }, index) => (
            <div key={index} className="flex-1 px-3  w-full">
              <a
                className="inline-flex w-full"
                href={node.childMarkdownRemark.frontmatter.url}
                title={node.childMarkdownRemark.frontmatter.title}
                alt={node.childMarkdownRemark.frontmatter.title}
              >
                <Card className="mb-8 flex flex-col justify-between w-full">
                  <div
                    className="text-xl font-semibold text-left"
                    dangerouslySetInnerHTML={{
                      __html: node.childMarkdownRemark.html,
                    }}
                  ></div>
                  <div className="flex w-full items-end justify-between mt-8">
                    <Image
                      className="w-16 "
                      image={node.childMarkdownRemark.frontmatter.image}
                      title={node.childMarkdownRemark.frontmatter.title}
                    />
                    <div className="text-right">
                      <p>{node.childMarkdownRemark.frontmatter.title}</p>

                      <p className="text-sm text-gray-600 ">
                        {node.childMarkdownRemark.frontmatter.heading}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Press;
