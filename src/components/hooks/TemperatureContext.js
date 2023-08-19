import React, { createContext, useContext, useState } from "react";

const TemperatureContext = createContext();

export const TemperatureProvider = ({ children }) => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  return (
    <TemperatureContext.Provider value={{ isFahrenheit, setIsFahrenheit }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export const useTemperature = () => {
  return useContext(TemperatureContext);
};
