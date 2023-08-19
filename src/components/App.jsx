import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { GlobalStyle } from "../Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../Styles/Theme";
import SharedLayOut from "./SharedLayOut/SharedLayOut";
import { Toaster } from "react-hot-toast";
import { TemperatureProvider } from "./hooks/TemperatureContext";
import { Suspense } from "react";
import Spinner from "./Spinner/Spinner";

const WelcomePage = lazy(() => import("../pages/WelcomePage"));
const WeatherPage = lazy(() => import("../pages/WeatherPage"));
const HourlyForecastMobPage = lazy(() =>
  import("../pages/HourlyForecastMobPage")
);
const SevenDaysForecastMobPage = lazy(() =>
  import("../pages/SevenDaysForecastMobPage")
);
const CitiesPage = lazy(() => import("../pages/CitiesPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 5000,
            style: {
              border: `2px solid ${theme.globalColors.error}`,
              color: ` ${theme.globalColors.error}`,
            },
            iconTheme: {
              primary: `${theme.globalColors.error}`,
              secondary: "white",
            },
          },
        }}
      />
      <TemperatureProvider>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/" element={<SharedLayOut />}>
              <Route path="weather/" element={<WeatherPage />}>
                <Route
                  path="today_forecast"
                  element={<HourlyForecastMobPage />}
                />
                <Route
                  path="7-day_forecast"
                  element={<SevenDaysForecastMobPage />}
                />
              </Route>
              <Route path="cities/" element={<CitiesPage />} />
            </Route>
          </Routes>
        </Suspense>
      </TemperatureProvider>
    </ThemeProvider>
  );
}

export default App;
