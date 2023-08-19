import { useEffect, useState } from "react";

import {
  addLeadingZero,
  showDay,
  showMonth,
} from "../../../utils/getCurrentTime";
import {
  City,
  StyledCityContainer,
  DateMonthYear,
  DayTime,
  Icon,
  Temperature,
  TemperatureContainer,
  Units,
  Degrees,
  Devider,
} from "./CityContainer.styled";
import { setTemp } from "../../../utils/setTemp";
import { useTemperature } from "../../../hooks/TemperatureContext";

const CityContainer = ({
  city,
  icon,
  weatherConditions,
  temperature,
  // isFahrenheit,
  // setIsFahrenheit,
}) => {
  const { isFahrenheit, setIsFahrenheit } = useTemperature();
  const [currentTime, setCurrentTime] = useState(new Date());
  const formattedDate = addLeadingZero(currentTime.getDate());
  const formattedDay = showDay(currentTime.getDay());
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedMonth = showMonth(currentTime.getMonth());
  const formattedYear = currentTime.getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fahrenheitClickHandler = () => {
    setIsFahrenheit(true);
  };

  const celsiusClickHandler = () => {
    setIsFahrenheit(false);
    localStorage.setItem("isFahrenheit", JSON.stringify(isFahrenheit));
  };

  return (
    <StyledCityContainer>
      <ul>
        <City>{city}</City>
        <DateMonthYear>
          {formattedDate} {formattedMonth}, {formattedYear}
        </DateMonthYear>
        <DayTime>
          {formattedDay}, {formattedTime}
        </DayTime>
      </ul>
      <TemperatureContainer>
        <li>
          <Icon
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={weatherConditions}
          />
        </li>
        <Temperature>
          <Degrees>{setTemp(isFahrenheit, temperature)}°</Degrees>
          <Units
            type="button"
            onClick={celsiusClickHandler}
            active={!isFahrenheit}
          >
            C
          </Units>
          <Devider>|</Devider>
          <Units
            type="button"
            active={isFahrenheit}
            onClick={fahrenheitClickHandler}
          >
            F
          </Units>
        </Temperature>
      </TemperatureContainer>
    </StyledCityContainer>
  );
};

export default CityContainer;
