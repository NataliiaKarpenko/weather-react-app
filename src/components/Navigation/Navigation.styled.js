import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-bottom: 80px;

  @media ${(props) => props.theme.media.tab} {
    gap: 60px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  flex-direction: ${(props) => (props.status === "menu" ? "row" : "column")};
  align-items: center;
  gap: 20px;
  font-size: 25px;

  color: ${(props) => props.theme.dark.title};
  transition: ${(props) => props.theme.transition};

  @media ${(props) => props.theme.media.tab} {
    gap: 10px;
    font-size: 18px;
  }
  @media ${(props) => props.theme.media.desktop} {
    font-size: 20px;
  }

  /* &:nth-child(2) {
    margin-bottom: 60px;
  } */

  &.active {
    font-weight: 500;
    color: ${(props) => props.theme.dark.activeLink};
    fill: ${(props) => props.theme.dark.activeLink};
  }

  &.active svg {
    fill: ${(props) => props.theme.dark.activeLink};
    stroke: ${(props) => props.theme.dark.activeLink};
  }

  &:hover {
    scale: 1.02;
  }
`;
