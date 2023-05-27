import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-[#EDEDED] dark:bg-slate-900 text-slate-500">
      <div className="custom-about-bg text-center">
        <div className="relative w-full h-full left-0 top-0 bg-black/60 text-white py-20 flex justify-between items-center px-5 flex-wrap">
          <h2 className="text-5xl font-medium mb-2">CONTACT US</h2>
          <h5>
            <span>Home</span> &rarr; Contact us
          </h5>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-center font-bold text-3xl text-[#22343D]">
          Contact & Find us
        </h2>
        <hr className="w-[100px] mx-auto mt-3 border-b-2 border-[#22343D]" />
        <div className="lg:w-11/12 mx-auto lg:grid grid-cols-3 mt-14 px-10 lg:px-0">
          <div className="py-7 pl-5 bg-[#C4C4C4] rounded-l-lg">
            <h3 className="text-3xl font-bold uppercase">Contact Info</h3>
            <p className="text-xl font-normal my-7 text-gray-600">
              You can always reach us via following contact details. We will
              give our best to reach you as possible.
            </p>
            <div className="flex">
              <h6 className="text-gray-600">Phone:</h6>
              <div className="text-xl font-medium ml-3">
                <h6>+234 805 029 1265 </h6>
                <h6>+234 907 228 0656</h6>
              </div>
            </div>
            <div className="flex my-7">
              <h6 className="text-gray-600">Email:</h6>
              <div className="text-xl font-medium ml-3">
                <h6>Info20@gmail.com</h6>
                <h6>Info21@gmail.com</h6>
              </div>
            </div>
            <div className="flex">
              <h6 className="text-gray-600">Address:</h6>
              <div className="text-xl font-medium ml-3">
                <h6>
                  4 law castle agbole aro opp. fidelity bank omida, abeokuta.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-5 lg:mt-0">
            <iframe
              className="rounded-r-lg"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14576.539275765917!2d90.24205760016109!3d24.026310502944764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e6bfa5230ed7%3A0x5e7ac06ece1150f2!2sBaroipara!5e0!3m2!1sen!2sbd!4v1684909264117!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-11 md:w-11/12 mx-auto">
        <h2 className="text-center font-bold text-3xl text-[#22343D]">
          Get In Touch
        </h2>
        <hr className="w-[100px] mx-auto mt-3 border-b-2 border-[#22343D]" />
        <form action="" className=" mt-8 mb-14 px-5 md:px-0">
          <input
            className="outline-none block w-full bg-[#EDEDED] py-3 rounded-md pl-3"
            type="text"
            name="name"
            placeholder="Name"
            id=""
          />
          <input
            className="outline-none block w-full bg-[#EDEDED] py-3 rounded-md pl-3 my-7"
            type="email"
            name="email"
            placeholder="Email"
            id=""
          />
          <input
            className="outline-none block w-full bg-[#EDEDED] py-3 rounded-md pl-3"
            type="text"
            name="subject"
            placeholder="Subject"
            id=""
          />
          <textarea
            className="outline-none block w-full bg-[#EDEDED] py-3 rounded-md pl-3 my-7"
            name="massage"
            id=""
            placeholder="Massage Here....."
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex justify-end">
            <input
              className="py-5 px-8 hover:bg-slate-900 hover:text-white cursor-pointer capitalize bg-white border border-black rounded-md "
              type="submit"
              value="Send message"
            />
          </div>
        </form>
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

export default Contact;
