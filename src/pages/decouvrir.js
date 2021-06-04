import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Hero from '../components/layout/Hero';
import Form from '../components/page/decouvrir/Form';
import Promo from '../components/page/decouvrir/Promo';

const Decouvrir = ({ data }) => {
  return (
    <Layout>
      <section>
        <Hero
          title={data.discover.childMarkdownRemark.frontmatter.title}
          image={data.discover.childMarkdownRemark.frontmatter.image}
        />
      </section>
      <section className="px-4 md:px-12 lg:px-16 xl:px-24 mt-20 mb-10 container mx-auto">
        <Promo />
      </section>
      <section className="px-4 md:px-12 lg:px-16 xl:px-28 container mx-auto">
        <Form />
      </section>
    </Layout>
  );
};
export const query = graphql`
  query DiscoverQuery {
    discover: file(name: { eq: "discover" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
          image {
            publicURL
          }
        }
      }
    }
  }
`;
export default Decouvrir;
