import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="font-body">
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
