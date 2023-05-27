import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme,setTheme] = useState("light")

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light":"dark")
  }

  return (
    <div className="px-4 py-5 mx-auto  md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <NavLink to="/" className="inline-flex items-center">
          <span className="ml-2 p-3 text-xl font-bold tracking-wide text-gray-800 uppercase">
            KinderGarten
          </span>
        </NavLink>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className="font-medium tracking-wide p-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="font-medium tracking-wide p-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/management"
              className="font-medium tracking-wide p-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className="font-medium tracking-wide p-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              News & Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="font-medium tracking-wide p-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="font-medium tracking-wide p-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <button className="font-medium tracking-wide p-3 text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" onClick={handleTheme}>{theme === "dark" ?<BsToggleOn className="text-3xl"></BsToggleOn> :<BsToggleOff className="text-3xl"></BsToggleOff>}</button>
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
                    <NavLink to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        KinderGarten
                      </span>
                    </NavLink>
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
                      <NavLink
                        to="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/management"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Management
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/news"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        News & Event
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/gallery"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Gallery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Contact us
                      </NavLink>
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
