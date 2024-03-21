import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Bruh from "./Components/Bruh";

const App = () => {
  return (
    <div className="font-body">
      {/* <Bruh /> */}
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
