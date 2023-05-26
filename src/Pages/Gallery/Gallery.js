import React from "react";
import "./Gallery.css";
import gallery from "../../asset/img/gallery/1.jpg";
import gallery1 from "../../asset/img/gallery/2.jpg";
import gallery2 from "../../asset/img/gallery/3.jpg";
import gallery3 from "../../asset/img/gallery/4.jpg";
import gallery4 from "../../asset/img/gallery/5.jpg";
import gallery5 from "../../asset/img/gallery/6.jpg";
import gallery6 from "../../asset/img/gallery/7.jpg";
import gallery7 from "../../asset/img/gallery/8.jpg";
import gallery8 from "../../asset/img/gallery/9.jpg";
import gallery9 from "../../asset/img/gallery/10.jpg";
import gallery10 from "../../asset/img/gallery/11.jpg";
import gallery11 from "../../asset/img/gallery/12.jpg";
import gallery12 from "../../asset/img/gallery/13.jpg";
import gallery13 from "../../asset/img/gallery/14.jpg";
import gallery14 from "../../asset/img/gallery/15.jpg";
import { AiOutlineMail } from "react-icons/ai";

const Gallery = () => {
  return (
    <div>
      <div className="custom-gallery-bg">
        <div className="relative w-full h-full left-0 top-0 bg-black/60 text-white py-20 flex justify-between items-center px-5 flex-wrap">
          <h4 className="md:ml-12 text-4xl font-medium">Gallery</h4>
          <h6 className="md:ml-12 text-base font-normal">
            <span className="text-[#C4C4C4]">Home</span> &rarr; Gallery
          </h6>
        </div>
      </div>
      {/* Gallery section  */}
      <div className="md:w-11/12 mx-auto mb-12">
        <div className="block px-5 md:px-0 md:flex flex-row gap-12 mt-8">
          <div className="flex flex-col lg:w-[30%] md:w-1/2 w-full">
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery1}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery2}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery3}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery4}
              alt=""
            />
          </div>
          <div className="flex flex-col lg:w-[30%] md:w-1/2 w-full">
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery5}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery6}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery7}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery8}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery9}
              alt=""
            />
          </div>
          <div className="flex flex-col lg:w-[30%] md:w-1/2 w-full">
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery10}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery11}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery12}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery13}
              alt=""
            />
            <img
              className="w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out"
              src={gallery14}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-11/12 mx-auto mb-12">
        <div className="space-x-5">
          <button className="bg-[#C4C4C4] py-2 md:py-5 px-3 md:px-8 rounded">
            Prev
          </button>
          <button className="bg-[#C4C4C4]  py-2 md:py-5 px-3 md:px-8 rounded border-l-2 border-black">
            Next
          </button>
        </div>
        <div>
          <button className="bg-[#C4C4C4]  py-2 md:py-5 px-3 md:px-8 rounded">
            Page
          </button>
        </div>
      </div>
      <div className="custom-bg">
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

export default Gallery;
