import { useTemperature } from "../../../hooks/TemperatureContext";
import { setTemp } from "../../../utils/setTemp";
import {
  Text,
  Title,
  TitleContainer,
  WeatherConditionsContainer,
  WeatherConditionsItem,
} from "./WeatherConditions.styled";
import DropIcon from "./WeatherConditionsIcons/DropIcon";
import ThermometerIcon from "./WeatherConditionsIcons/ThermometerIcons";
import WeatherIcon from "./WeatherConditionsIcons/WeatherIcon";
import WindIcon from "./WeatherConditionsIcons/WindIcon";

const WeatherConditions = ({
  weatherConditions,
  feelsLike,
  humidity,
  wind,
}) => {
  const { isFahrenheit } = useTemperature();

  const unit = isFahrenheit ? "F" : "C";
  return (
    <WeatherConditionsContainer>
      <ul>
        <WeatherConditionsItem>
          <TitleContainer>
            <ThermometerIcon />
            <Title>Feels like</Title>
          </TitleContainer>
          <Text>
            {setTemp(isFahrenheit, feelsLike)}° {unit}
          </Text>
        </WeatherConditionsItem>
        <WeatherConditionsItem>
          <TitleContainer>
            <DropIcon />
            <Title>Humidity</Title>
          </TitleContainer>
          <Text>{humidity}%</Text>
        </WeatherConditionsItem>
      </ul>
      <ul>
        <WeatherConditionsItem>
          <TitleContainer>
            <WindIcon />
            <Title>Wind</Title>
          </TitleContainer>
          <Text>{wind} m/s</Text>
        </WeatherConditionsItem>
        <WeatherConditionsItem>
          <TitleContainer>
            <WeatherIcon />
            <Title>Air conditions</Title>
          </TitleContainer>
          <Text>{weatherConditions}</Text>
        </WeatherConditionsItem>
      </ul>
    </WeatherConditionsContainer>
  );
};

export default WeatherConditions;
