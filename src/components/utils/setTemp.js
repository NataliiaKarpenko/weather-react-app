export const setTemp = (isFahrenheit, temperature) => {
  const temp = isFahrenheit
    ? Math.round((temperature * 9) / 5 + 32)
    : Math.round(temperature);
  return temp;
};
