import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Bruh from "./Components/Bruh";
import Apple from "./Pages/HomePage/Middle/Apple";

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
    // <div className="relative h-[300vh] bg-neutral-900">
    //   <div className="sticky top-0 bg-purple-600 flex h-screen items-center justify-center overflow-hidden">
    //     <Apple
    //       numFrames={24}
    //       width={1080}
    //       height={1080}
    //       location={"build/build"}
    //       format={"jpg"}
    //     />
    //   </div>

    <div>
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
