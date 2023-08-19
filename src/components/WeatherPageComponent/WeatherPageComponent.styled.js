import styled from "styled-components";

export const WeatherPageContainer = styled.div`
  @media ${(props) => props.theme.media.sx} {
    width: 100%;
    max-width: 345px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 345px;
  }

  @media ${(props) => props.theme.media.tab} {
    width: 550px;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 650px;
  }
`;
