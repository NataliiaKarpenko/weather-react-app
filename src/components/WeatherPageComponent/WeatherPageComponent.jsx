import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner/Spinner";
import { Outlet, useSearchParams } from "react-router-dom";

import CurrentWeather from "./CurrentWeather/CurrentWeather";
import { requestWeatherByCity } from "../API_services/API_services";
import { WeatherPageContainer } from "./WeatherPageComponent.styled";
import WeatherPageLinks from "./WeatherPageLinks/WeatherPageLinks";
import { useTemperature } from "../hooks/TemperatureContext";

const WeatherPageComponent = () => {
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [weatherConditions, setWeatherConditions] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [status, setStatus] = useState("idle");
  const [searchParams, setSearchParams] = useSearchParams();
  const city = searchParams.get("city");
  const [cityName, setCityName] = useState("");
  const { isFahrenheit, setIsFahrenheit } = useTemperature();

  useEffect(() => {
    if (!city) return;
    const getCurrentWeather = async () => {
      try {
        const weatherInfo = await requestWeatherByCity(city);
        setStatus("pending");

        if (weatherInfo.status === 200) {
          setStatus("resolved");
          setCityName(weatherInfo.data.name);
          setTemperature(weatherInfo.data.main.temp);
          setIcon(weatherInfo.data.weather[0].icon);
          setWeatherConditions(weatherInfo.data.weather[0].main);
          setFeelsLike(Math.round(weatherInfo.data.main.feels_like));
          setHumidity(weatherInfo.data.main.humidity);
          setWind(weatherInfo.data.wind.speed);
        }
      } catch (error) {
        if (city) {
          searchParams.delete("city");
          setSearchParams(searchParams);
          setStatus("rejected");

          if (error.message === "Request failed with status code 404") {
            toast.error(
              "There is no result matching your query. Check its spelling or enter another city",
              {
                id: "error1",
              }
            );
          } else {
            toast.error(`Geolocation error or API error: ${error.message}`, {
              id: "error2",
            });
          }
        }
      }
    };

    getCurrentWeather(city);
  }, [city, searchParams, setSearchParams, status]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <WeatherPageContainer>
      {status === "pending" && <Spinner />}
      {status === "rejected" && <p>vbgfrt</p>}
      {status === "resolved" && (
        <>
          <CurrentWeather
            city={cityName}
            temperature={temperature}
            icon={icon}
            weatherConditions={weatherConditions}
            feelsLike={feelsLike}
            humidity={humidity}
            wind={wind}
            isFahrenheit={isFahrenheit}
            setIsFahrenheit={setIsFahrenheit}
          />
          <WeatherPageLinks city={cityName} />

          <Outlet />
        </>
      )}
    </WeatherPageContainer>
  );
};

export default WeatherPageComponent;
