import { useStaticQuery, graphql } from 'gatsby';

export const useCmsContent = () => {
  const { action, hero } = useStaticQuery(
    graphql`
      query GetCmsContent {
        action: file(name: { eq: "action" }) {
          childMarkdownRemark {
            html
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
      }
    `
  );
  return { action, hero };
};
