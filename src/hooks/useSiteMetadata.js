import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteURL
          social {
            siteOwner
            twitter
            linkedIn
          }
          imagePrefix
          munchkinId
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
