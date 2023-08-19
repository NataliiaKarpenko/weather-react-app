import styled from "styled-components";

export const Icon = styled.svg`
  width: 40px;
  text-align: center;
  fill: ${(props) => props.theme.dark.title};
  stroke: ${(props) => props.theme.dark.title};

  @media ${(props) => props.theme.media.tab} {
    width: 30px;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 40px;
  }
`;

export const ToggleIcon = styled(Icon)`
  width: 50px;

  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  @media ${(props) => props.theme.media.tab} {
    width: 60px;
  }

  &:hover {
    scale: 1.02;
  }
`;
