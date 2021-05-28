import { useStaticQuery, graphql } from 'gatsby';

export const useContentAction = () => {
  const { action } = useStaticQuery(
    graphql`
      query GetContentAction {
        action: file(name: { eq: "action" }) {
          childMarkdownRemark {
            html
            frontmatter {
              title
            }
          }
        }
      }
    `
  );
  return { action };
};
