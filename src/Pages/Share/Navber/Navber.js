import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto  md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            KinderGarten
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/management"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Management
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              News & Event
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Contact us
            </Link>
          </li>
          <li>
            <BsToggleOff />
            <BsToggleOn />
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <GiHamburgerMenu className="text-3xl" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        KinderGarten
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <GrClose className="text-2xl" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/management"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        News & Event
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
