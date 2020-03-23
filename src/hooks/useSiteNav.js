import { useStaticQuery, graphql } from "gatsby";

const useSiteMainNav = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "site-navigation.json" }) {
        childDataJson {
          main {
            label
            url
          }
        }
      }
    }
  `);
  return data.file.childDataJson.main;
};

export default useSiteMainNav;
