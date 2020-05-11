import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  border: 1px solid #ccc;
  height: 400px;
  padding-bottom: 40px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: ${props => props.theme.boxShadow};
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  width: ${props => (props.logoWide ? "180px" : "100px")};
  margin: 20px auto 0;

  /* overwrite Gatsby's image styling*/
  > div > div {
    padding-bottom: 100px !important;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
  text-align: left;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
  }
`;

export const CardType = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 5px;
`;

export const CardDate = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 10px;
`;

export const CardExcerpt = styled.div`
  line-height: 1.3;
`;

export const CardCTA = styled.p`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 14px;
  text-align: right;
  color: red !important;
`;
