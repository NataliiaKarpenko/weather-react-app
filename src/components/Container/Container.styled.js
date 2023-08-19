import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;

  border-radius: 20px;
  background-color: ${(props) => props.theme.dark.containerBackground};

  @media ${(props) => props.theme.media.sx} {
    width: 100%;
    max-width: 375px;
  }

  @media ${(props) => props.theme.media.phone} {
    width: 375px;
  }

  @media ${(props) => props.theme.media.tab} {
    width: 768px;
    padding: 30px;
    display: flex;
    justify-content: right;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 900px;
    padding: 40px;
  }
`;

export const StyledWelcomePageContainer = styled(StyledContainer)`
  height: 100%;
`;

export const FooterContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
