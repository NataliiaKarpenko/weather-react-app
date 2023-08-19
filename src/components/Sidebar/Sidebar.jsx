import Navigation from "../Navigation/Navigation";
import IconToggleOff from "../NavigationIcons/IconToggleOff";
import IconToggleOn from "../NavigationIcons/IconToggleOn";
import { StyledSidebar } from "./Sidebar.styled";

const Sidebar = ({ style }) => {
  return (
    <StyledSidebar style={style}>
      <Navigation />

      {/* <IconToggleOff /> */}
      <IconToggleOn />
    </StyledSidebar>
  );
};

export default Sidebar;
