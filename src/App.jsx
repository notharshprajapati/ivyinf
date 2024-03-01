// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sus from "./Pages/HomePage/Middle/Sus";
import HeroAnimation from "./Pages/HomePage/Middle/HeroAnimation";
import SeqVid from "./Pages/HomePage/Middle/SeqVid";
import Sequence from "./Pages/HomePage/Middle/Sequence";
import Bruh from "./Components/Bruh";

const App = () => {
  return (
    <div>
      <Sequence />
      {/* <Sus
        width={1920}
        height={1080}
        numFrames={37}
        location={"LinesVideo/LV"}
        scrollHeight={2160}
        format={"jpg"}
      /> */}
      {/* <Bruh /> */}
    </div>

    // <Router>
    //   <div className="">
    //     <Navbar />
    //     <div className="bg-black text-white scroll-smooth">
    //       <AppRouter />
    //     </div>
    //     <Footer />
    //   </div>
    // </Router>
  );
};

export default App;
