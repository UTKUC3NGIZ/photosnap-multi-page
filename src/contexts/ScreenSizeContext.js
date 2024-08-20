"use client";
import { createContext, useState, useEffect, useContext } from "react";

const ScreenSizeContext = createContext();

export function ScreenSizeProvider({ children }) {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export function useScreenSize() {
  return useContext(ScreenSizeContext);
}
