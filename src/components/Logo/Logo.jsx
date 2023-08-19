import umbrella1 from "../../images/umbrella.png";
import umbrella2 from "../../images/umbrella@2x.png";
import { Image, LogoLink } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoLink to="/">
      <Image srcSet={`${umbrella2} 2x`} src={umbrella1} alt="sun" />
    </LogoLink>
  );
};

export default Logo;
