import { IconWind } from "./WeatherConditionsIcons.styled";

function WindIcon(props) {
  return (
    <IconWind
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 8h8.5a2.5 2.5 0 10-2.34-3.24M3 12h15.5a2.5 2.5 0 11-2.34 3.24M4 16h5.5a2.5 2.5 0 11-2.34 3.24" />
    </IconWind>
  );
}

export default WindIcon;
