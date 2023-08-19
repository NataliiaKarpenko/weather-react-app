import { CSSTransition } from "react-transition-group";
import { StyledBackdrop } from "./Backdrop.styled";

const Backdrop = ({ children, handleBackdropClick }) => {
  return (
    <StyledBackdrop onClick={handleBackdropClick}>{children}</StyledBackdrop>
  );
};

export default Backdrop;
