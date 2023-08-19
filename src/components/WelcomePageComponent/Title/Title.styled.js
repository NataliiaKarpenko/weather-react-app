import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media ${(props) => props.theme.media.tab} {
    width: calc(100% / 2);
  }

  @media ${(props) => props.theme.media.desktop} {
    width: calc(100% / 2);
  }
`;

export const Image = styled.img`
  width: 150px;
  margin-bottom: 80px;
`;

export const Headline = styled.h1`
  margin-bottom: 50px;
  font-size: 50px;
  font-weight: 800;
  line-height: 1.5%;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.dark.primaryText};
`;

export const Text = styled.p`
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: 500;
  color: ${(props) => props.theme.dark.secondaryText};
`;

export const Link = styled(NavLink)`
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid transparent;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.globalColors.buttonText};
  background-color: ${(props) => props.theme.globalColors.buttonBg};

  &:hover {
    scale: 1.01;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.globalColors.buttonBg};
  }
`;
