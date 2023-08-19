import CityContainer from "./CityContainer/CityContainer";
import WeatherConditions from "./WeatherConditions/WeatherConditions";

const CurrentWeather = ({
  city,
  temperature,
  icon,
  weatherConditions,
  feelsLike,
  humidity,
  wind,
  isFahrenheit,
  setIsFahrenheit,
}) => {
  return (
    <div>
      <CityContainer
        city={city}
        temperature={temperature}
        icon={icon}
        weatherConditions={weatherConditions}
        isFahrenheit={isFahrenheit}
        setIsFahrenheit={setIsFahrenheit}
      />
      <WeatherConditions
        weatherConditions={weatherConditions}
        feelsLike={feelsLike}
        humidity={humidity}
        wind={wind}
        isFahrenheit={isFahrenheit}
      />
    </div>
  );
};

export default CurrentWeather;
