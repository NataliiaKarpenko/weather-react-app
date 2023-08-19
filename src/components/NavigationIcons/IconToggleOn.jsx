import { ToggleIcon } from "./WeatherIcons.styled";

// function IconToggleOn(props) {
//   return (
//     <ToggleIcon viewBox="-1 2 18 18" {...props}>
//       <path d="M5 3a5 5 0 000 10h6a5 5 0 000-10H5zm6 9a4 4 0 110-8 4 4 0 010 8z" />
//     </ToggleIcon>
//   );
// }

// export default IconToggleOn;

function IconToggleOn(props) {
  return (
    <ToggleIcon viewBox="-1 2 22 12" {...props}>
      <path d="M7 5H3a3 3 0 000 6h4a4.995 4.995 0 01-.584-1H3a2 2 0 110-4h3.416c.156-.357.352-.692.584-1z" />
      <path d="M16 8A5 5 0 116 8a5 5 0 0110 0z" />
    </ToggleIcon>
  );
}

export default IconToggleOn;
