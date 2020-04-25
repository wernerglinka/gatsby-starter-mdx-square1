import { useStaticQuery, graphql } from "gatsby";

const useTeam = () => {
  const data = useStaticQuery(graphql`
    {
      teamPictures: allFile(filter: { relativeDirectory: { eq: "team-avatars" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1600) {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      teamData: allFile(filter: { relativeDirectory: { eq: "team" } }) {
        edges {
          node {
            childTeamJson {
              name
              title
              avatar
              bio
              weight
              socialLinks {
                twitter
                facebook
                linkedIn
              }
            }
          }
        }
      }
    }
  `);
  const allTeamMembers = [];
  const allImages = data.teamPictures.edges.map(edge => edge.node.childImageSharp.fluid);

  // normalize team member array
  data.teamData.edges.forEach(edge => {
    if (edge.node.childTeamJson) {
      allTeamMembers.push(edge.node.childTeamJson);
    }
  });

  // add image data to customer data
  allTeamMembers.map(teamMember => {
    allImages.map(image => {
      if (image.originalName === teamMember.avatar) {
        teamMember.image = image;
      }
    });
  });

  // sort team members by weight property
  allTeamMembers.sort((a, b) => a.weight - b.weight);

  return allTeamMembers;
};

export default useTeam;
