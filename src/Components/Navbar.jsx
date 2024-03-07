import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className=" bg-gray-300 px-4 fixed top-0 w-screen z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img className="h-16" src="./img/logo.png" alt="" />
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-black" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/accessories" className="text-black" onClick={closeMenu}>
            Accessories
          </Link>
          <Link to="/cart" className="text-black" onClick={closeMenu}>
            Cart
          </Link>
          <Link to="/cart" className="text-white" onClick={closeMenu}>
            <div className="bg-orange-500 font-bold rounded-md py-2 px-4">
              Buy Now
            </div>
          </Link>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer "
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-neutral-900 text-white transition-all duration-300  ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto p-8 md:hidden">
          <Link to="/" className="text-white block mb-4" onClick={closeMenu}>
            Home
          </Link>
          <Link
            to="/accessories"
            className="text-white block mb-4"
            onClick={closeMenu}
          >
            Accessories
          </Link>
          <Link
            to="/cart"
            className="text-white block mb-4"
            onClick={closeMenu}
          >
            Cart
          </Link>
          <FaTimes
            className="text-white text-2xl cursor-pointer absolute top-4 right-4"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
