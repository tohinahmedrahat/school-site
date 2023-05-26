import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link>
            <h1 className="text-4xl font-bold italic font-mono">
              KinderGarten
            </h1>
          </Link>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <Link
              to="/"
              className="mx-4 text-base text-black transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium "
            >
              Home
            </Link>

            <Link
              to="/"
              className="mx-4 text-base text-black transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium "
            >
              About Us
            </Link>

            <Link
              to="/"
              className="mx-4 text-base text-black transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium "
            >
              Management
            </Link>

            <Link
              to="/"
              className="mx-4 text-base text-black transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium "
            >
              News & Event
            </Link>

            <Link
              to="/"
              className="mx-4 text-base text-black transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium "
            >
              Gallery
            </Link>
            <Link
              to="/"
              className="mx-4 text-base text-black transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-medium "
            >
              Contact us
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-900 md:my-10 dark:border-gray-700" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex -mx-2 mb-6">
            <a
              href="/"
              className="mx-2 text-black transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400  text-xl"
              aria-label="Facebook"
            >
              <BsFacebook />
            </a>

            <a
              href="/"
              className="mx-2 text-black transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400  text-xl"
              aria-label="Twitter"
            >
              <AiFillTwitterCircle />
            </a>

            <a
              href="/"
              className="mx-2 text-black transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400  text-xl"
              aria-label="Instagram"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="/"
              className="mx-2 text-black transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400  text-xl"
              aria-label="WhatsApp"
            >
              <BsWhatsapp />
            </a>
            <a
              href="/"
              className="mx-2 text-black transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400  text-xl"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
          </div>
          <p className="text-sm text-gray-600 font-medium dark:text-gray-300">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
