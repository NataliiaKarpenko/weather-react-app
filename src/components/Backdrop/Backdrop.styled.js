import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;

  transition: opacity var(--transition-dur-func);
  overflow-y: scroll;
`;
