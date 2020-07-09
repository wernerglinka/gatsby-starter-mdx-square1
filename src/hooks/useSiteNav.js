import { useStaticQuery, graphql } from "gatsby";

const useSiteMainNav = () => {
  const data = useStaticQuery(graphql`
    {
      topLevel: file(relativePath: { eq: "main-navigation/main-menu.json" }) {
        childMainNavigationJson {
          main {
            label
            url
            itemID
            hasSubMenu
            itemClass
            buttonAttr
          }
        }
      }
      subLevel: allMainNavigationJson {
        nodes {
          childOf
          hasPromo
          promoID
          linkGroup {
            title
            titleClass
            links {
              icon
              label
              linkClass
              url
            }
          }
        }
      }
    }
  `);

  const topLevel = data.topLevel.childMainNavigationJson.main;
  const subLevel = data.subLevel.nodes;

  return {
    topLevel,
    subLevel,
  };
};

export default useSiteMainNav;
