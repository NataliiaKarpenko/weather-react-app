import { useEffect, useState } from "react";
import { requestThreeHourForecast } from "../API_services/API_services";
import { addLeadingZero } from "../utils/getCurrentTime";
import { setTemp } from "../utils/setTemp";
import { useTemperature } from "../hooks/TemperatureContext";
import { useSearchParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {
  HourlyForecastContainer,
  Title,
  HourlyForecastList,
  HourlyForecastItem,
  ForecastItemContainer,
  Time,
  Image,
  Temp,
} from "./HourlyForecastPageComponent.styled";

const HourlyForecastPageComponent = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isFahrenheit } = useTemperature();
  const newHourlyForecast = hourlyForecast.slice(0, 8);

  useEffect(() => {
    const getHourlyForecast = async (city) => {
      setIsLoading(true);
      try {
        const { data } = await requestThreeHourForecast(city);
        setHourlyForecast(data.list);
        setIsLoading(false);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getHourlyForecast(city);
  }, [city]);

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <p>bvfgrt</p>}
      {!isError && !isLoading && (
        <HourlyForecastContainer>
          <Title>Today's weather</Title>
          <HourlyForecastList>
            {newHourlyForecast.map(({ dt_txt, main, dt, weather }) => {
              const date = new Date(dt_txt);
              const hours = addLeadingZero(date.getHours());
              const minutes = addLeadingZero(date.getMinutes());

              const unit = isFahrenheit ? "F" : "C";

              return (
                <HourlyForecastItem key={dt}>
                  <ForecastItemContainer>
                    <Time>
                      {hours}:{minutes}
                    </Time>
                    <Image
                      src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png `}
                      alt={weather[0].main}
                    />

                    <Temp>
                      {setTemp(isFahrenheit, main.temp)}° {unit}
                    </Temp>
                  </ForecastItemContainer>
                </HourlyForecastItem>
              );
            })}
          </HourlyForecastList>
        </HourlyForecastContainer>
      )}
    </>
  );
};

export default HourlyForecastPageComponent;
