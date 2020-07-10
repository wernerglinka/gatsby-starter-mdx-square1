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

  console.log(`in useMenuPromo hook. thisPromo: ${thisPromo}`);

  console.log(`in useMenuPromo hook. data: ${JSON.stringify(data, null, 4)}`);

  const temp = data.allFile.edges.filter(edge => edge.node.childPromosJson.promoID === thisPromo);

  console.log(`in useMenuPromo hook. temp: ${JSON.stringify(temp, null, 4)}`);

  // simplify data structure
  const menuPromo = temp.map(item => item.node.childPromosJson);

  console.log(`in useMenuPromo hook. menuPromo[0].title: ${menuPromo[0]}`);

  return menuPromo[0];
};

export default useMenuPromo;
