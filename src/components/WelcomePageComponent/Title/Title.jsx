import { useEffect, useState } from "react";
import umbrella1 from "../../../images/umbrella.png";
import umbrella2 from "../../../images/umbrella.png";
import { Headline, Image, StyledTitle, Text, Link } from "./Title.styled";

export const Title = ({ localCity }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <StyledTitle>
      <Image srcSet={`${umbrella2} 2x`} src={umbrella1} alt="umbrella" />
      <Headline>Breeze</Headline>
      <Text>Weather App</Text>
      <Link to={`/weather?city=${localCity.toLowerCase()}`}>Get started</Link>
    </StyledTitle>
  );
};

export default Title;
