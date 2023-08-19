import WeatherPageComponent from "../components/WeatherPageComponent/WeatherPageComponent";

const WeatherPage = ({ handleLinkClick }) => {
  return (
    <div>
      <WeatherPageComponent handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default WeatherPage;
