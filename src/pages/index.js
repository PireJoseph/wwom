import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';

import Hero from '../components/index/Hero';
import Presentation from '../components/index/Presentation';
import Services from '../components/index/Services';
import Testimonial from '../components/index/Testimonial';
import Press from '../components/index/Press';
import Action from '../components/index/Action';

const Index = ({ data }) => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <Hero />
    </section>

    <section id="presentation" className="py-20 lg:pb-40 lg:pt-48">
      <Presentation />
    </section>

    <section id="services">
      <Services />
    </section>
    <section id="testimonial" className="py-20 lg:pt-32">
      <Testimonial />
    </section>

    <section className="container mx-auto my-20 py-24">
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
