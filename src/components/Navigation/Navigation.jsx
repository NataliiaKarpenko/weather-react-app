import umbrella1 from "../../images/umbrella.png";
import umbrella2 from "../../images/umbrella@2x.png";
import Logo from "../Logo/Logo";
import IconListUl from "../NavigationIcons/IconListUl";
import IconWeatherHailSun from "../NavigationIcons/IconWeatherHailSun";
import {
  Image,
  LogoLink,
  NavigationLink,
  StyledNavigation,
} from "./Navigation.styled";

const Navigation = ({ status, handleLinkClick }) => {
  return (
    <>
      <Logo />
      <StyledNavigation>
        <NavigationLink to="/weather" status={status} onClick={handleLinkClick}>
          <IconWeatherHailSun />
          <p>Weather</p>
        </NavigationLink>
        <NavigationLink to="/cities" status={status} onClick={handleLinkClick}>
          <IconListUl />
          <p>Cities</p>
        </NavigationLink>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
