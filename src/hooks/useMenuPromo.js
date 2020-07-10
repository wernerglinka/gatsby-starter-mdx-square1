import { useStaticQuery, graphql } from "gatsby";

const useMenuPromo = thisPromo => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "promos" } }) {
        edges {
          node {
            id
            childPromosJson {
              promoID
              title
              image
              cta {
                text
                url
              }
            }
          }
        }
      }
    }
  `);

  const temp = data.allFile.edges.filter(edge => edge.node.childPromosJson.promoID === thisPromo);
  // simplify data structure
  const menuPromo = temp.map(item => item.node.childPromosJson);
  return menuPromo[0];
};

export default useMenuPromo;
