import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 20px;

  background-color: ${(props) => props.theme.dark.contentBackground};

  @media ${(props) => props.theme.media.tab} {
    padding: 30px;
  }
`;

export const WeatherPageLink = styled(NavLink)`
  font-size: 16px;
  color: ${(props) => props.theme.dark.secondaryText};
  transition: ${(props) => props.theme.transition};

  @media ${(props) => props.theme.media.tab} {
    font-size: 20px;
  }

  &.active {
    color: ${(props) => props.theme.dark.activeLink};
    cursor: default;

    &:hover {
      scale: 1;
      text-decoration: none;
    }
  }

  &:hover {
    scale: 1.01;
    text-decoration: underline;
  }
`;
