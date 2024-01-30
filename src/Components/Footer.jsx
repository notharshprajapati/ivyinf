// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-black py-4">
      <div className="container mx-auto flex flex-wrap justify-center sm:justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-lg font-bold mb-2">Navigation</h2>
          <ul>
            <li>
              <Link to="/" className="text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="text-black">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-black">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-lg font-bold mb-2">Additional Links</h2>
          <ul>
            <li>
              <Link to="/faq" className="text-black">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black">
                About
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-black">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 text-center sm:text-left">
          <h2 className="text-lg font-bold mb-2">Social Media</h2>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-black" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-black" />
            </a>
          </div>
          <div className="flex justify-center sm:justify-start space-x-4 mt-2">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-black" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
