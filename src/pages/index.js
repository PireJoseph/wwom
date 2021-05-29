import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';

import Hero from '../components/pages/index/Hero';
import Presentation from '../components/pages/index/Presentation';
import Services from '../components/pages/index/Services';
import Testimonial from '../components/pages/index/Testimonial';
import Press from '../components/pages/index/Press';
import Action from '../components/pages/index/Action';

const Index = ({ data }) => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <Hero hero={data.hero} />
    </section>

    <section id="presentation" className="py-20 lg:pb-40 lg:pt-48">
      <Presentation presentation={data.presentation} />
    </section>

    <section id="services">
      <Services />
    </section>
    <section id="testimonial" className="py-20 lg:pt-32">
      <Testimonial />
    </section>

    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <Action />
    </section>

    <section id="press" className="py-20 lg:py-40">
      <Press />
    </section>
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    site: file(name: { eq: "site" }) {
      childMarkdownRemark {
        frontmatter {
          logo
          title
        }
      }
    }
    hero: file(name: { eq: "hero" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
          action
          image
        }
      }
    }
    presentation: file(name: { eq: "presentation" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
    testimonial: file(name: { eq: "testimonial" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
    action: file(name: { eq: "action" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
    footer: file(name: { eq: "footer" }) {
      childMarkdownRemark {
        frontmatter {
          title
        }
      }
    }
    services: allFile(filter: { sourceInstanceName: { eq: "services" } }) {
      edges {
        node {
          sourceInstanceName
          childMarkdownRemark {
            html
            frontmatter {
              title
              order
              picture
              text
            }
          }
        }
      }
    }
    pros: allFile(filter: { sourceInstanceName: { eq: "pros" } }) {
      edges {
        node {
          sourceInstanceName
          childMarkdownRemark {
            html
            frontmatter {
              title
              order
              icon
            }
          }
        }
      }
    }
    press: allFile(filter: { sourceInstanceName: { eq: "press" } }) {
      edges {
        node {
          sourceInstanceName
          childMarkdownRemark {
            html
            frontmatter {
              title
              order
              url
              logo
            }
          }
        }
      }
    }
  }
`;

export default Index;
