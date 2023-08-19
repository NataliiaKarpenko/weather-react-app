import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoLink = styled(NavLink)`
  /* @media ${(props) => props.theme.media.sx} {
    margin-bottom: 60px;
  } */
  @media ${(props) => props.theme.media.tab} {
    margin-bottom: 80px;
  }
`;

export const Image = styled.img`
  width: 50px;

  @media ${(props) => props.theme.media.tab} {
    width: 70px;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 80px;
  }
`;
