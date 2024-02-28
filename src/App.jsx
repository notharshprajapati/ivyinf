// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sus from "./Pages/HomePage/Middle/Sus";
import HeroAnimation from "./Pages/HomePage/Middle/HeroAnimation";

const App = () => {
  return (
    // <div className="bg-black ">
    //   <Sus
    //     scrollHeight={1920}
    //     // width={1920}
    //     // height={1080}
    //     // numFrames={120}
    //     // location={"Drone/One/one"}

    //     // width={1920}
    //     // height={1080}
    //     // numFrames={108}
    //     // location={"Drone/Two/Two"}

    //     // width={1080}
    //     // height={1080}
    //     // numFrames={57}
    //     // location={"Drone/Three/Three"}

    //     // width={1080}
    //     // height={1080}
    //     // numFrames={120}
    //     // location={"Drone/Four/Four"}

    //     // width={1000}
    //     // height={500}
    //     // numFrames={180}
    //     // location={"Goggle/one/one"}

    //     width={1000}
    //     height={500}
    //     numFrames={120}
    //     location={"Goggle/two/two"}
    //   />
    // </div>

    <Router>
      <div className="">
        <Navbar />
        <div className="bg-black text-white scroll-smooth">
          <AppRouter />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
