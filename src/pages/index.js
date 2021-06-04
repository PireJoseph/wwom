import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';

import Hero from '../components/layout/Hero';
import Presentation from '../components/page/index/Presentation';
import Services from '../components/page/index/Services';
import Testimonial from '../components/page/index/Testimonial';
import Pros from '../components/page/index/Pros';
import Press from '../components/page/index/Press';

import { ReactComponent as HeroImage } from './../content/pages/index/hero/indexHeroImage.svg';

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
          image={<HeroImage />}
          action={data.hero.childMarkdownRemark.frontmatter.action}
          button={true}
        />
      </section>

      <section id="presentation" className="pb-20 lg:pb-40  container mx-auto">
        <Presentation />
      </section>

      <section id="services" className="px-6 lg:px-32 container mx-auto">
        <Services />
      </section>

      <section id="testimonial" className="pt-20 pb-4 container mx-auto">
        <Testimonial />
      </section>

      <section className="my-16  container mx-auto">
        <Pros />
      </section>

      <section id="press" className="lg:px-32  container mx-auto">
        <Press />
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
    hero: file(name: { eq: "indexHero" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
          action
        }
      }
    }
  }
`;

export default Index;
