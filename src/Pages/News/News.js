import React from "react";
import "./News.css";
import { RiAdminFill, RiTimeFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";

const News = () => {
  return (
    <div className="dark:bg-slate-900">
      <div className="news-bg">
        <div className="relative w-full h-full left-0 top-0 bg-black/60 text-white py-20">
          <h3 className="ml-12 text-4xl font-medium">News & Event</h3>
          <h6 className="font-normal ml-12 text-base">
            <span>Home</span> &rarr; News & Event
          </h6>
        </div>
      </div>
      <div className="mt-12 md:w-11/12 mx-auto md:grid grid-cols-3 gap-x-12">
        <div className="col-span-2 px-5 mb-10 md:mb-0 md:px-0">
          <img src="" alt="" />
          <h2 className="bg-gray-800 py-3 pl-5 text-white text-3xl uppercase px-5">
            The School end of The session party
          </h2>
          <h6 className="my-2 text-base font-bold">Recent Event</h6>
          <div className="md:grid grid-cols-3 gap-12">
            <div className="flex items-center">
              <RiAdminFill className="text-xl"></RiAdminFill>
              <h6 className="ml-2 font-semibold text-xl">Admin</h6>
            </div>
            <div className="flex items-center">
              <RiTimeFill className="text-xl"></RiTimeFill>
              <h6 className="ml-2 font-semibold text-xl">September 10, 2021</h6>
            </div>
            <div className="flex items-center">
              <FaComments className="text-xl"></FaComments>
              <h6 className="ml-2 font-semibold text-xl">September 10, 2021</h6>
            </div>
          </div>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod
            temp incit ut labore dolore magnaaliqua. computer science students
            Ut enim ad minimveniam. Lorem ipsum.
          </p>
          <button className="text-xl font-normal bg-[#C4C4C4] rounded py-3 px-3">
            Read more &rarr;
          </button>
        </div>
        <div>
          <div className="px-5 md:px-0">
            <img src="" alt="" />
            <h4 className="bg-gray-800 py-3 pl-5 text-white">
              Lorem Ipsum dolor Sit amet.
            </h4>
            <h6 className="my-1 text-base font-bold">Top story</h6>
            <p className="text-xl font-normal leading-9">
              Lorem ipsum dolor sit amet, consectetur temp incit ut labore
              dolore mor magnaaliq uaadiping elit sed.
            </p>
            <h6 className="mt-2 font-bold text-base">Readmore </h6>
          </div>
          <div className="mt-5 px-5 md:px-0F">
            <img src="" alt="" />
            <h4 className="bg-gray-800 py-3 pl-5 text-white">
              Lorem Ipsum dolor Sit amet.
            </h4>
            <h6 className="my-1 text-base font-bold">Top story</h6>
            <p className="text-xl font-normal leading-9">
              Lorem ipsum dolor sit amet, consectetur temp incit ut labore
              dolore mor magnaaliq uaadiping elit sed.
            </p>
            <h6 className="mt-2 font-bold text-base">Readmore </h6>
          </div>
        </div>
      </div>
      <div className="mt-8 dark:bg-slate-900 bg-[#F2F2F2] pb-16">
        <h3 className="text-3xl font-bold ml-12 pt-8">LatesT News & Event</h3>
        <div className="mt-12 md:grid lg:grid-cols-3 grid-cols-2 gap-x-20 gap-y-12 md:w-11/12 mx-auto px-5 md:px-0 space-y-10 md:space-y-0">
          <div>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
            <h4 className="text-xl font-semibold mt-3">
              September 10, 2021 by Admin
            </h4>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex">
                <FaComments className="text-3xl font-medium"></FaComments>
                <h6 className="ml-2 text-3xl font-medium">10</h6>
              </div>
              <button className="bg-[#C4C4C4] rounded-md px-3 py-1">
                Read more
              </button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
            <h4 className="text-xl font-semibold mt-3">
              September 10, 2021 by Admin
            </h4>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex">
                <FaComments className="text-3xl font-medium"></FaComments>
                <h6 className="ml-2 text-3xl font-medium">10</h6>
              </div>
              <button className="bg-[#C4C4C4] rounded-md px-3 py-1">
                Read more
              </button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
            <h4 className="text-xl font-semibold mt-3">
              September 10, 2021 by Admin
            </h4>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex">
                <FaComments className="text-3xl font-medium"></FaComments>
                <h6 className="ml-2 text-3xl font-medium">10</h6>
              </div>
              <button className="bg-[#C4C4C4] rounded-md px-3 py-1">
                Read more
              </button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
            <h4 className="text-xl font-semibold mt-3">
              September 10, 2021 by Admin
            </h4>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex">
                <FaComments className="text-3xl font-medium"></FaComments>
                <h6 className="ml-2 text-3xl font-medium">10</h6>
              </div>
              <button className="bg-[#C4C4C4] rounded-md px-3 py-1">
                Read more
              </button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
            <h4 className="text-xl font-semibold mt-3">
              September 10, 2021 by Admin
            </h4>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex">
                <FaComments className="text-3xl font-medium"></FaComments>
                <h6 className="ml-2 text-3xl font-medium">10</h6>
              </div>
              <button className="bg-[#C4C4C4] rounded-md px-3 py-1">
                Read more
              </button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
            <h4 className="text-xl font-semibold mt-3">
              September 10, 2021 by Admin
            </h4>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex">
                <FaComments className="text-3xl font-medium"></FaComments>
                <h6 className="ml-2 text-3xl font-medium">10</h6>
              </div>
              <button className="bg-[#C4C4C4] rounded-md px-3 py-1">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
