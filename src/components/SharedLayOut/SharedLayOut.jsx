import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

import Sidebar from "../Sidebar/Sidebar";
import { StyledContainer } from "../Container/Container.styled";
import { StyledMain } from "../Main/Main.styled";
import Spinner from "../Spinner/Spinner";
import InputForm from "../InputForm/InputForm";
import Footer from "../Footer/Footer";

const SharedLayOut = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const [refContentContainer, { height: heightContentContainer }] =
    useMeasure();

  const [calculatedHeight, setCalculatedHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleResize() {
      setViewportHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (viewportHeight > heightContentContainer) {
      setCalculatedHeight(heightContentContainer);
    } else {
      setCalculatedHeight(viewportHeight);
    }
  }, [viewportHeight, heightContentContainer, calculatedHeight]);

  const minHeight = windowWidth < 768 ? viewportHeight - 129 : calculatedHeight;

  return (
    <>
      <StyledMain>
        <StyledContainer style={{ minHeight: `${minHeight}px` }}>
          {windowWidth >= 768 && (
            <Sidebar style={{ height: `${calculatedHeight}px` }} />
          )}
          <div ref={refContentContainer} style={{ height: "100%" }}>
            <InputForm />
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </div>
        </StyledContainer>
      </StyledMain>
      {windowWidth < 768 && <Footer />}
    </>
  );
};

export default SharedLayOut;
