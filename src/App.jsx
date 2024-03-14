import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Fade from "react-reveal/Fade";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isBottom, setIsBottom] = useState(true);
  const isMobile = width <= 1080; // Adjust the breakpoint as needed

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    setIsBottom(bottom);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
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
            {/* {isBottom && (
              
            )} */}
          </div>
        </Router>
      )}
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';

// const MyComponent = () => {
//   const [isBottom, setIsBottom] = useState(false);

//   const handleScroll = () => {
//     const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
//     setIsBottom(bottom);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* Your page content */}
//       {isBottom && (
//         <Fade bottom>
//           <Link
//             to="https://drone-proto.vercel.app/"
//             className="text-white fixed bottom-0 right-0 z-100"
//           >
//             <div className="bg-orange-500 font-bold text-5xl rounded-md py-4 px-8">
//               Try Now
//             </div>
//           </Link>
//         </Fade>
//       )}
//     </>
//   );
// };

// export default MyComponent;
