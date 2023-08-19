import styled from "styled-components";

export const InputIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.dark.title};

  @media ${(props) => props.theme.media.tab} {
    width: 18px;
    height: 18px;
  }
`;
