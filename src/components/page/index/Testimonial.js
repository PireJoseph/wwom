import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LabelText from '../../LabelText';
import StatsBox from '../../StatsBox';

const Testimonial = () => {
  const { testimonial } = useStaticQuery(graphql`
    query TestimonialQuery {
      testimonial: file(name: { eq: "testimonial" }) {
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
    <>
      <div>
        <div className="mt-8 bg-gray-100 px-6 md:px-24  lg:px-44 xl:px-80 py-12">
          <LabelText className="text-center text-gray-600 mt-10 mb-16  text-primary-darker text-xl md:text-2xl">
            {testimonial.childMarkdownRemark.frontmatter.title}
          </LabelText>
          <div
            className=" tracking-wide leading-loose	  text-justify"
            dangerouslySetInnerHTML={{ __html: testimonial.childMarkdownRemark.html }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
