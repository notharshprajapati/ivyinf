import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Bruh from "./Components/Bruh";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 1080; // Adjust the breakpoint as needed

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    // <Bruh />

    <div className="font-body">
      {isMobile ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-black font-bold text-4xl">
            Please open on desktop
          </p>
        </div>
      ) : (
        <Router>
          <div className="">
            <Navbar />
            <div className="bg-black text-white scroll-smooth">
              <AppRouter />
            </div>
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
};

export default App;
