// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-2xl font-bold">
          IVY Infinity
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-black">
            Home
          </Link>
          <Link to="/accessories" className="text-black">
            Accessories
          </Link>
          <Link to="/cart" className="text-black">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
