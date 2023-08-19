import { useState } from "react";
import { FooterContainer } from "../Container/Container.styled";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { StyledFooter } from "./Footer.styled";
import MenuIcon from "./MenuIcon/MenuIcon";
import _debounce from "lodash/debounce";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    debouncedSetMenuOpen();
  };
  const debouncedSetMenuOpen = _debounce(() => {
    setMenuOpen(true);
  }, 300);

  return (
    <>
      <StyledFooter>
        <FooterContainer>
          <MenuIcon menuOpenHandler={menuOpenHandler} />
          <Logo />
        </FooterContainer>
      </StyledFooter>
      {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </>
  );
};

export default Footer;
