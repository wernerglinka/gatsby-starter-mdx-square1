import { useStaticQuery, graphql } from "gatsby";

const useMenuPromo = thisPromo => {
  const data = useStaticQuery(graphql`
    {
      promoData: allFile(filter: { relativeDirectory: { eq: "promotions" } }) {
        edges {
          node {
            id
            childPromotionsJson {
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

  const temp = data.promoData.edges.filter(edge => edge.node.childPromotionsJson.promoID === thisPromo);
  // simplify data structure
  const menuPromo = temp.map(item => item.node.childPromotionsJson);
  return menuPromo[0];
};

export default useMenuPromo;
