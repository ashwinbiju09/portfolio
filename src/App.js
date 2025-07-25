import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseRoute from "./pages/BaseRoute";
import Loader from "./components/Loader";
import UnicornScene from "unicornstudio-react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-50" />{" "}
        {/* Hide attribution */}
        <UnicornScene
          projectId="z1Brp32tKLFOSUyvE9DJ"
          width="100%"
          height="100%"
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<BaseRoute />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
