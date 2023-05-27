import React from "react";
import img from "../../asset/img/about.jpg";
import img1 from "../../asset/img/about-1.jpg";
import { AiOutlineMail } from "react-icons/ai";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="bg-[#C4C4C4] dark:bg-slate-900 px-5 md:px-0">
        <div className="flex justify-between items-center md:w-10/12 mx-auto py-3">
          <h2 className="text-3xl font-medium">About us</h2>
          <h3>
            <span className="text-[#0000005d] dark:text-gray-400">Home</span> &rarr;{" "}
            <span className="font-normal">About us</span>{" "}
          </h3>
        </div>
      </div>
      <div className="md:w-10/12 mx-auto mt-12 px-5 md:px-0">
        <p className="uppercase text-xl leading-10">
          <span className="text-4xl font-semibold uppercase">WHo we are</span>{" "}
          One of the most important, yet underrated, pages on an entire website
          is the About Us page, particularly for small- and medium-sized
          business owners (SMBs). The About Us page is one of your best chances
          to create a meaningful connection with a site visitor that builds
          confidence in the potential customer and lays the foundation of a
          solid business relationship.{" "}
        </p>
        <p className="uppercase text-xl leading-10">
          In this blog post, we’ll outline what an About Us page is, a few of
          the most important elements of an About Us page, show off some awesome
          About Us page examples, and highlight a few of the beautiful About Us
          page templates that are available to Duda customers and partners.
        </p>
      </div>
      <div className="lg:grid grid-cols-2 gap-12 md:w-10/12 mx-auto mt-16 px-5 md:px-0">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p className="text-xl leading-8 mt-5">
            Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod
            temp incit ut labore dolore magna aliqua. Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp incididunt ut labore dol magna aliqua. Ut enim ad minim
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam Lorem ipsum dolor sit amet, consectetur adipng elit, sed do
            eiusmod temp incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="lg:grid grid-cols-2 gap-12 md:w-10/12 mx-auto mt-16 px-5 md:px-0">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <p className="text-xl leading-8 mt-5">
            Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod
            temp incit ut labore dolore magna aliqua. Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp incididunt ut labore dol magna aliqua. Ut enim ad minim
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam Lorem ipsum dolor sit amet, consectetur adipng elit, sed do
            eiusmod temp incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="mt-12 custom-bg">
        <div className="relative w-full h-full left-0 top-0 bg-black/60 text-white py-28">
          <p className="lg:w-2/5 mx-auto text-3xl font-normal text-center text-gray-900-700 px-5 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum
            dolor{" "}
          </p>
          <div className="w-2/3 mx-auto relative">
            <input
              className="mt-12 py-3 px-5 w-full outline-none border-0 bg-[#C4C4C4] rounded-3xl"
              type="text"
              name=""
              id=""
            />
            <div className="rounded-full absolute top-[49px] cursor-pointer right-0 bg-white p-2">
              <AiOutlineMail className="text-3xl text-black"></AiOutlineMail>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
