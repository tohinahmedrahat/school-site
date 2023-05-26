import React from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import img from "../../asset/img/manegment.jpg";
import woman from "../../asset/img/woman.png";
import "./Management.css";

const Management = () => {
  return (
    <div>
      <div className="custom-bg text-white">
        <div className="relative w-full h-full left-0 top-0 bg-black/60 text-white py-20 flex justify-between items-center px-5 flex-wrap">
          <h4 className="text-3xl font-medium md:ml-14">Management</h4>
          <h6 className="text-base font-normal md:mr-14 mt-3 md:mt-0 flex items-center justify-center gap-2">
            <span>Home</span> <AiOutlineArrowRight className="text-xl" />{" "}
            Management
          </h6>
        </div>
      </div>
      <div className="mt-16">
        <div className="lg:grid grid-cols-2 gap-12 md:w-11/12 mx-auto px-5  md:px-0">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold uppercase">the Founder</h2>
            <h4 className="text-xl font-medium mt-2">MR. LOREM IPSUM</h4>
            <p className="mt-5 font-normal text-xl leading-7">
              Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
              eiusmod temp incit ut labore dolore magna aliqua. computer science
              students Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod temp incididunt ut
              labore dol magna aliqua. olabisi oanbanjo unuversity Ut enim ad
              minim Lorem ipsum eiusmod temp incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet.
            </p>
            <div className="mt-5">
              <button className="mr-3">
                <BsFacebook></BsFacebook>
              </button>
              <button className="mr-3">
                <BsWhatsapp></BsWhatsapp>
              </button>
              <button>
                <BsInstagram></BsInstagram>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-[#EDEDED] pb-14">
          <h3 className="pt-7 text-3xl font-bold text-center ">
            <span className="text-gray-400">Meet Our</span> Team
          </h3>
          <div className="md:grid md:w-10/12 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-24 mt-24 px-5 space-y-24 md:space-y-0">
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-600 text-center rounded-lg">
              <div className="relative custom-style">
                <img
                  className="rounded-full w-36 h-36 custom-Image"
                  src={woman}
                  alt=""
                />
              </div>
              <div className="mt-14">
                <h5 className="text-xl font-semibold -mt-10">
                  Afuwape J. Abiodun{" "}
                </h5>
                <h6>consectetur adipiscing</h6>
                <div className="mt-4 pb-5">
                  <button className="mr-3">
                    <BsFacebook></BsFacebook>
                  </button>
                  <button className="mr-3">
                    <BsInstagram></BsInstagram>
                  </button>
                  <button>
                    <BsWhatsapp></BsWhatsapp>
                  </button>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Management;
