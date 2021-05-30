import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';

import Hero from '../components/index/Hero';
import Presentation from '../components/index/Presentation';
import Services from '../components/index/Services';
import Testimonial from '../components/index/Testimonial';
import Pros from '../components/index/Pros';
import Press from '../components/index/Press';
import Action from '../components/index/Action';

const Index = ({ data }) => {
  let links = [
    { label: 'Présentation', id: 'presentation' },
    { label: 'Services', id: 'services' },
    { label: 'Témoignages', id: 'testimonial' },
    { label: 'Presse', id: 'press' },
  ];

  return (
    <Layout links={links}>
      <section className="">
        <Hero />
      </section>

      <section id="presentation" className="pb-20 lg:pb-40  lg:px-8">
        <Presentation />
      </section>

      <section id="services" className="px-6 lg:px-32 xl:px-60">
        <Services />
      </section>

      <section id="testimonial" className="pt-20 pb-4">
        <Testimonial />
      </section>

      <section className="my-16 lg:px-8">
        <Pros />
      </section>

      <section id="press" className=" px-12">
        <Press />
      </section>

      <section className="px-4 md:px-12 lg:px-16 xl:px-24 pt-20">
        <Action />
      </section>
    </Layout>
  );
};

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
            }
          }
        }
      }
    }
  }
`;

export default Index;
