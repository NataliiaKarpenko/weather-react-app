import styled from "styled-components";

export const HourlyForecastContainer = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.dark.contentBackground};

  @media ${(props) => props.theme.media.tab} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Title = styled.p`
  margin-bottom: 30px;
  margin-left: 30px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.dark.secondaryText};

  @media ${(props) => props.theme.media.tab} {
    font-size: 20px;
  }
`;

export const HourlyForecastList = styled.ul`
  width: 100%;
  flex-wrap: none;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin; /* For Firefox */
  -ms-overflow-style: none; /*For Internet Explorer and Edge */
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
    background-color: transparent;
  }
`;

export const HourlyForecastItem = styled.li`
  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.dark.secondaryText};
  }
`;

export const ForecastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(345px / 4);

  @media ${(props) => props.theme.media.phone} {
    width: calc(345px / 4);
  }

  @media ${(props) => props.theme.media.tab} {
    width: calc(550px / 4);
  }
  @media ${(props) => props.theme.media.desktop} {
    width: calc(650px / 4);
  }
`;

export const Time = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.dark.secondaryText};
`;

export const Image = styled.img`
  width: 80px;

  @media ${(props) => props.theme.media.tab} {
    width: 100px;
  }
`;

export const TempContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Temp = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.dark.primaryText};

  @media ${(props) => props.theme.media.tab} {
    font-size: 22px;
  }
`;
