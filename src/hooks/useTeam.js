import { useStaticQuery, graphql } from "gatsby";
import useCloudinaryImage from "./useCloudinaryImage";

const useTeam = () => {
  const data = useStaticQuery(graphql`
    {
      teamData: allFile(filter: { relativeDirectory: { eq: "team" } }) {
        edges {
          node {
            childTeamJson {
              name
              position
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
  const allImages = useCloudinaryImage("all");

  // normalize team member array
  data.teamData.edges.forEach(edge => {
    if (edge.node.childTeamJson) {
      allTeamMembers.push(edge.node.childTeamJson);
    }
  });

  // add image data to customer data
  allTeamMembers.map(teamMember => {
    allImages.map(image => {
      if (image.includes(teamMember.avatar)) {
        teamMember.image = image;
      }
    });
  });

  // sort team members by weight property
  allTeamMembers.sort((a, b) => a.weight - b.weight);

  return allTeamMembers;
};

export default useTeam;
