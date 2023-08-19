import styled from "styled-components";

export const StyledCityContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 10px 30px;

  justify-content: space-between;

  @media ${(props) => props.theme.media.desktop} {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 40px;
  }
`;

export const City = styled.li`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.5;
  color: ${(props) => props.theme.dark.primaryText};

  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 60px;
  }
`;

export const DateMonthYear = styled.li`
  font-size: 20px;
  line-height: 1;
  margin-bottom: 10px;
  color: ${(props) => props.theme.dark.secondaryText};

  @media ${(props) => props.theme.media.desktop} {
    font-size: 25px;
  }
`;

export const DayTime = styled.li`
  font-size: 16px;
  line-height: 1;
  color: ${(props) => props.theme.dark.secondaryText};

  @media ${(props) => props.theme.media.desktop} {
    font-size: 20px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -20px;
  width: 100px;

  @media ${(props) => props.theme.media.desktop} {
    top: -50px;
    width: 200px;
  }
`;

export const TemperatureContainer = styled.ul`
  position: relative;
  display: flex;
  align-items: end;
`;

export const Temperature = styled.li`
  display: flex;
  align-items: start;
  gap: 7px;
`;

export const Degrees = styled.span`
  font-size: 30px;
  font-weight: 500;
  line-height: 1;
  color: ${(props) => props.theme.dark.primaryText};

  @media ${(props) => props.theme.media.desktop} {
    font-size: 40px;
  }
`;

export const Units = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  transition: ${(props) => props.theme.transition};
  color: ${(props) =>
    props.active
      ? props.theme.dark.primaryText
      : props.theme.dark.secondaryText};

  cursor: ${(props) => (props.active ? "auto" : "pointer")};
  @media ${(props) => props.theme.media.desktop} {
    font-size: 25px;
  }
`;

export const Devider = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.dark.primaryText};

  @media ${(props) => props.theme.media.desktop} {
    font-size: 25px;
  }
`;
