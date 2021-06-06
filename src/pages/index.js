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

import ButtonLink from '../components/ButtonLink';

const Index = ({ data }) => {
  return (
    <Layout>
      <section>
        <Hero
          title={data.hero.childMarkdownRemark.html}
          image={<HeroImage />}
          link={<ButtonLink link="decouvrir" content="Découvrez WWOM" />}
        />
      </section>

      <section className="py-32  container mx-auto">
        <Presentation />
      </section>

      <section className="px-6 lg:px-32 container mx-auto">
        <Services />
      </section>

      <section className="pt-20 pb-4 container mx-auto">
        <Testimonial />
      </section>

      <section className="mb-16 mt-6  container mx-auto">
        <Pros />
      </section>

      <section id="press" className="lg:px-32 mt-32  container mx-auto">
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
          link
        }
      }
    }
  }
`;

export default Index;
