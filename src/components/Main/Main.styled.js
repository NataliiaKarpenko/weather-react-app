import styled from "styled-components";

export const StyledMain = styled.main`
  background: ${(props) => props.theme.dark.mainPageBackground};
  display: block;
  min-height: 100vh;
  padding-top: 25px;

  @media ${(props) => props.theme.media.tab} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const StyledWelcomePageMain = styled(StyledMain)`
  background: ${(props) => props.theme.dark.mainBackground};
  height: 100vh;
`;
