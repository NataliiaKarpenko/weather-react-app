import { useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Navigation from "../Navigation/Navigation";
import IconToggleOn from "../NavigationIcons/IconToggleOn";
import { ContentContainer } from "./Menu.styled";
import { removeBodyscroll } from "../utils/removeBodyScroll";
import { CSSTransition, Transition } from "react-transition-group";
import { useRef } from "react";

const Menu = ({ menuOpen, setMenuOpen }) => {
  // useEffect(() => {
  //   removeBodyscroll(menuOpen);
  // }, [menuOpen]);

  const nodeRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setMenuOpen]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  console.log(menuOpen);

  const duration = 2000;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateX(-100%)",
  };

  const transitionStyles = {
    entering: { transform: "translateX(0)" },
    entered: { transform: "translateX(0)" },
    exiting: { transform: "translateX(-100%)" },
    exited: { transform: "translateX(-100%)" },
  };

  return (
    <Transition in={menuOpen} timeout={duration}>
      {(state) => (
        <ContentContainer
          menuOpen={menuOpen}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <Navigation
            status="menu"
            handleLinkClick={handleLinkClick}
            className="menu"
          />
          <p>{`State = ${state}`}</p>
          <IconToggleOn />
        </ContentContainer>
      )}
    </Transition>
  );
};

export default Menu;
