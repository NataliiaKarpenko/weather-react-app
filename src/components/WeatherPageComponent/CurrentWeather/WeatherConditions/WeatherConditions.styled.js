import styled from "styled-components";

export const WeatherConditionsContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.dark.contentBackground};

  @media ${(props) => props.theme.media.tab} {
    padding: 30px;
  }

  @media ${(props) => props.theme.media.desktop} {
    padding: 30px 40px;
  }
`;

export const WeatherConditionsItem = styled.li`
  &:first-child {
    margin-bottom: 25px;

    @media ${(props) => props.theme.media.tab} {
      margin-bottom: 30px;
    }
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.dark.secondaryText};

  @media ${(props) => props.theme.media.tab} {
    font-size: 20px;
  }

  @media ${(props) => props.theme.media.desktop} {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  margin-top: auto;
  padding-left: 37px;
  font-size: 20px;
  font-weight: 600;
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.dark.secondaryText};

  @media ${(props) => props.theme.media.tab} {
    font-size: 25px;
  }

  @media ${(props) => props.theme.media.desktop} {
    font-size: 28px;
  }
`;
