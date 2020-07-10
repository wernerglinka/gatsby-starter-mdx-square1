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

  console.log(`in useMenuPromo hook. thisPromo: ${thisPromo}`);

  console.log(`in useMenuPromo hook. data.promoData.edges: ${data.promoData.edges}`);

  const temp = data.promoData.edges.filter(edge => edge.node.childPromotionsJson.promoID === thisPromo);
  // simplify data structure
  const menuPromo = temp.map(item => item.node.childPromotionsJson);

  console.log(`in useMenuPromo hook. menuPromo[0].title: ${menuPromo[0].title}`);

  return menuPromo[0];
};

export default useMenuPromo;
