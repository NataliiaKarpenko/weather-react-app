import { useRef } from "react";
import { LinksContainer, WeatherPageLink } from "./WeatherPageLinks.styled";
import _debounce from "lodash/debounce";

const WeatherPageLinks = ({ city }) => {
  const myRef = useRef(null);

  const scrollDown = _debounce(() => {
    if (myRef.current) {
      window.scrollTo({
        top: myRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, 300);

  return (
    <LinksContainer ref={myRef}>
      <WeatherPageLink to={`today_forecast?city=${city}`} onClick={scrollDown}>
        {" "}
        Today's forecast
      </WeatherPageLink>
      <WeatherPageLink to={`7-day_forecast?city=${city}`} onClick={scrollDown}>
        7-day forecast
      </WeatherPageLink>
    </LinksContainer>
  );
};

export default WeatherPageLinks;
