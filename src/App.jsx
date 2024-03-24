import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Temp from "./backup/Temp";
import Sequence from "./Pages/HomePage/Middle/Sequence";
import Zoomout from "./Pages/HomePage/Zoomout";

const App = () => {
  return (
    <div className="font-body">
      {/* <Temp />
      <div className="h-screen">blank</div>
      <Zoomout />
      <div className="h-screen">blank</div> */}
      <Router>
        <Navbar />
        <div className="bg-black text-white scroll-smooth">
          <AppRouter />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
