import { useStaticQuery, graphql } from 'gatsby';

export const useContentHero = () => {
  const { hero } = useStaticQuery(
    graphql`
      query GetContentHero {
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
      }
    `
  );
  return { hero };
};
