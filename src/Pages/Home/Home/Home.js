import React from 'react';
import banner from '../../../asset/img/banner.png'
import { MdSportsVolleyball } from 'react-icons/md';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaPaintBrush } from 'react-icons/fa';
import { AiFillWechat } from 'react-icons/ai';
import img from "../../../asset/img/about-1.jpg"
import woman from "../../../asset/img/woman.png";
import gallery from "../../../asset/img/gallery/1.jpg"
import gallery1 from "../../../asset/img/gallery/2.jpg"
import gallery2 from "../../../asset/img/gallery/3.jpg"
import gallery3 from "../../../asset/img/gallery/4.jpg"
import gallery4 from "../../../asset/img/gallery/5.jpg"
import gallery6 from "../../../asset/img/gallery/7.jpg"
import gallery7 from "../../../asset/img/gallery/8.jpg"
import gallery8 from "../../../asset/img/gallery/9.jpg"
import "./home.css";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className='bg-[#EDEDED]'>
                <div className='md:w-11/12 mx-auto'>
                    <div className='md:grid grid-cols-2 gap-14'>
                        <div className='md:pt-20'>
                            <h1 className='text-3xl font-medium'>Lorem Ipsum dolor <br /> sit amet.</h1>
                            <p className='mt-7 text-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <button className='md:mt-8 bg-[#C4C4C4] px-7 py-5 rounded-md'>More info &rarr;</button>
                        </div>
                        <div className='md:py-12'>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                    <h2 className='text-3xl font-bold uppercase'>Some Of  Our <span className='text-[#C4C4C4]'>Activies</span></h2>
                    <div className='md:grid grid-cols-3 gap-14 mt-12 pb-12'>
                        <div>
                            <div className='bg-[#C4C4C4] w-12 rounded-2xl p-3'>
                                <MdSportsVolleyball className='text-2xl'></MdSportsVolleyball>
                            </div>
                            <h6 className='mt-5 text-[#22343D] font-semibold text-2xl'>Lorem</h6>
                            <p className='mt-3 text-base font-normal w-60'>Lorem ipsum dolor sit amet,consectetur adipiscing.</p>
                        </div>
                        <div>
                            <div className='bg-[#C4C4C4] w-12 rounded-2xl p-3'>
                                <BsMusicNoteBeamed className='text-2xl'></BsMusicNoteBeamed>
                            </div>
                            <h6 className='mt-5 text-[#22343D] font-semibold text-2xl'>Lorem</h6>
                            <p className='mt-3 text-base font-normal w-60'>Lorem ipsum dolor sit amet,consectetur adipiscing.</p>
                        </div>
                        <div>
                            <div className='bg-[#C4C4C4] w-12 rounded-2xl p-3'>
                                <FaPaintBrush className='text-2xl'></FaPaintBrush>
                            </div>
                            <h6 className='mt-5 text-[#22343D] font-semibold text-2xl'>Lorem</h6>
                            <p className='mt-3 text-base font-normal w-60'>Lorem ipsum dolor sit amet,consectetur adipiscing.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* our blog section  */}
            <div className='md:w-11/12 mx-auto'>
                <h3 className='mt-8 text-3xl font-bold mb-12'><span className='text-[#C4C4C4]'>From Our</span> Blog</h3>
                <div className='md:grid grid-cols-3 gap-14'>
                    <div className='h-[550px]'>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <p className='my-5 text-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <h5 className='text-xl font-semibold'>September 10, 2021 by Admin</h5>
                        <div className='mt-5 text-3xl font-medium flex items-center'>
                            <AiFillWechat></AiFillWechat>
                            <span className='ml-2'>10</span>
                        </div>
                    </div>
                    <div className='h-[550px]'>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <p className='my-5 text-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <h5 className='text-xl font-semibold'>September 10, 2021 by Admin</h5>
                        <div className='mt-5 text-3xl font-medium flex items-center'>
                            <AiFillWechat></AiFillWechat>
                            <span className='ml-2'>10</span>
                        </div>
                    </div>
                    <div className='h-[550px]'>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <p className='my-5 text-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <h5 className='text-xl font-semibold'>September 10, 2021 by Admin</h5>
                        <div className='mt-5 text-3xl font-medium flex items-center'>
                            <AiFillWechat></AiFillWechat>
                            <span className='ml-2'>10</span>
                        </div>
                    </div>

                </div>
                <button className='bg-[#C4C4C4] py-5 px-8 rounded text-xl font-normal'>More Articles &rarr;</button>
            </div>

            {/* our team section  */}
            <div className="mt-12 bg-[#EDEDED] pb-14">
                <h3 className="pt-7 text-3xl font-bold text-center ">
                    <span className="text-gray-400">Meet Our</span> Team
                </h3>
                <div className="md:grid md:w-10/12 mx-auto grid-cols-3 gap-24 mt-24">
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
            {/* Gallery section  */}
            <div className='md:w-11/12 mx-auto mb-12'>
                <div className='flex flex-wrap flex-row gap-12 mt-8'>
                    <div className='flex flex-col w-[30%]'>
                        <img className='w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out' src={gallery} alt="" />
                        <img className='w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out' src={gallery1} alt="" />
                        <img className='w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out' src={gallery2} alt="" />
                    </div>
                    <div className='flex flex-col w-[30%]'>
                        <img className='w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out' src={gallery3} alt="" />
                        <img className='w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out' src={gallery4} alt="" />
                    </div>
                    <div className='flex flex-col w-[30%]'>
                        <img className='w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out' src={gallery6} alt="" />
                        <img className='w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out' src={gallery7} alt="" />
                        <img className='w-full pb-12 hover:scale-105 duration-100 transition-all ease-in-out' src={gallery8} alt="" />
                    </div>
                </div>
                <Link to="gallery" className='bg-[#C4C4C4] px-8 py-5 rounded text-xl font-normal'>More Photos &rarr;</Link>
            </div>
            {/* contact us scetion  */}
            <div className='custom-bg py-12'>
                <h3 className='text-5xl font-normal text-center'>Join Us Today !</h3>
                <p className='text-xl font-normal mt-8 w-2/4 mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet. Aenean consectetur fringilla mi in mollis. Etiam eleifend sollicitudin dignissim.</p>
                <div className='flex justify-center mt-12'>
                    <Link to="#" className='bg-[#C4C4C4] px-8 py-5 rounded text-xl font-normal'>Contact us &rarr;</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;