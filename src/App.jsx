// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
};

export default App;
