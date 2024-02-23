// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-black text-white overflow-x-hidden">
        <AppRouter />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
