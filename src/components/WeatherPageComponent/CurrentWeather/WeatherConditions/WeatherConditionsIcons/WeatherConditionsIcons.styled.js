import styled from "styled-components";

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.dark.secondaryText};

  @media ${(props) => props.theme.media.tab} {
    width: 25px;
    height: 25px;
  }
`;

export const IconWind = styled(Icon)`
  fill: none;
  stroke: ${(props) => props.theme.dark.secondaryText};
`;
