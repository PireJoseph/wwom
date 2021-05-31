import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';

import Hero from '../components/layout/Hero';
import Presentation from '../components/page/index/Presentation';
import Services from '../components/page/index/Services';
import Testimonial from '../components/page/index/Testimonial';
import Pros from '../components/page/index/Pros';
import Press from '../components/page/index/Press';
import Action from '../components/page/index/Action';

const Index = ({ data }) => {
  let links = [
    { label: 'Présentation', id: 'presentation' },
    { label: 'Services', id: 'services' },
    { label: 'Témoignages', id: 'testimonial' },
    { label: 'Presse', id: 'press' },
  ];

  return (
    <Layout links={links}>
      <section>
        <Hero
          title={data.hero.childMarkdownRemark.frontmatter.title}
          image={data.hero.childMarkdownRemark.frontmatter.image}
          action={data.hero.childMarkdownRemark.frontmatter.action}
          button={true}
        />
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
          image {
            publicURL
          }
        }
      }
    }
  }
`;

export default Index;
