import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTemperature } from "../hooks/TemperatureContext";
import { requestSevenDaysForecast } from "../API_services/API_services";
import { formatDayToCome } from "../utils/getCurrentTime";
import { setTemp } from "../utils/setTemp";
import Spinner from "../Spinner/Spinner";
import {
  ForecastContainer,
  ForecastItem,
  Icon,
  ItemBox,
  Max,
  Min,
  Title,
} from "./SevenDaysWeatherComponent.styled";

const SevenDaysWeatherComponent = () => {
  const [forecast, setForecast] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const { isFahrenheit } = useTemperature();

  useEffect(() => {
    setIsLoading(true);
    const getSevenDaysForecast = async (city) => {
      try {
        const sevenDaysForecast = await requestSevenDaysForecast(city);
        if (city) {
          setForecast(sevenDaysForecast.daily.slice(0, 7));
          setIsError(false);
          setIsLoading(false);
        }
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getSevenDaysForecast(city);
  }, [city]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isError && !isLoading && (
        <ForecastContainer>
          <Title>7-day forecast</Title>
          <ul>
            {forecast.map((item) => {
              const unit = isFahrenheit ? "F" : "C";

              return (
                <ForecastItem key={item.dt}>
                  <ItemBox>{formatDayToCome(item.dt)}</ItemBox>
                  <ItemBox>
                    <Icon
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png `}
                      alt={item.weather[0].main}
                    />
                  </ItemBox>
                  <ItemBox>{item.weather[0].main}</ItemBox>
                  <ItemBox>
                    <Max>{setTemp(isFahrenheit, item.temp.max)}</Max>/
                    <Min>{setTemp(isFahrenheit, item.temp.min)}</Min>°{unit}
                  </ItemBox>
                </ForecastItem>
              );
            })}
          </ul>
        </ForecastContainer>
      )}
    </>
  );
};

export default SevenDaysWeatherComponent;
