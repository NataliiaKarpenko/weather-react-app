import { useEffect, useState } from "react";
import { StyledWelcomePageContainer } from "../Container/Container.styled";
import { StyledWelcomePageMain } from "../Main/Main.styled";
import Decoration from "./Decoration/Decoration";
import Title from "./Title/Title";
import { showCurrentPosition } from "../API_services/API_services";
import Spinner from "../Spinner/Spinner";

const WelcomePageComponent = () => {
  const [localCity, setLocalCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const showCurrentWeather = async () => {
      setIsLoading(true);
      try {
        const city = await showCurrentPosition();

        setLocalCity(city);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    showCurrentWeather();
  }, []);

  return (
    <StyledWelcomePageMain>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledWelcomePageContainer>
          <Decoration />
          <Title localCity={localCity} />
        </StyledWelcomePageContainer>
      )}
    </StyledWelcomePageMain>
  );
};

export default WelcomePageComponent;
