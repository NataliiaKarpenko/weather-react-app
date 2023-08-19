import sun1 from "../../../images/sun.png";
import sun2 from "../../../images/sun@2x.png";
import rain1 from "../../../images/rain.png";
import rain2 from "../../../images/rain@2x.png";
import snow1 from "../../../images/snow.png";
import snow2 from "../../../images/snow@2x.png";
import typhoon1 from "../../../images/typhoon.png";
import typhoon2 from "../../../images/typhoon@2x.png";
import wind1 from "../../../images/wind.png";
import wind2 from "../../../images/wind@2x.png";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  StyledDecoration,
  ImageContainer,
} from "./Decoration.styled";

const Decoration = () => {
  return (
    <StyledDecoration>
      <ImageContainer>
        <Image1 srcSet={`${sun2} 2x`} src={sun1} alt="sun" />
        <Image2 srcSet={`${rain2} 2x`} src={rain1} alt="rain" />
        <Image3 srcSet={`${snow2} 2x`} src={snow1} alt="snow" />
        <Image4 srcSet={`${typhoon2} 2x`} src={typhoon1} alt="typhoon" />
        <Image5 srcSet={`${wind2} 2x`} src={wind1} alt="wind" />
      </ImageContainer>
    </StyledDecoration>
  );
};

export default Decoration;
