import * as React from "react";
import { StyledMenuIcon } from "./MenuIcon.styled";

function MenuIcon({ menuOpenHandler }) {
  return (
    <StyledMenuIcon viewBox="0 0 16 16" onClick={menuOpenHandler}>
      <path d="M2.5 12a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" />
    </StyledMenuIcon>
  );
}

export default MenuIcon;
