import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseRoute from "./pages/BaseRoute";
import Loader from "./components/Loader"; // Adjust the import path as needed
import ParticlesComponent from "./components/ParticlesComponent";
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
      className="bg-gradient-to-r from-black via-slate-900 to-black"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <ParticlesComponent /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<BaseRoute />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
