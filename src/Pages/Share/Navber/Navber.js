import React from 'react';
import logo from '../../../asset/img/logo.png'
import { Link } from 'react-router-dom';
import {BsToggleOff } from 'react-icons/bs';

const Navber = () => {
    return (
        <div className='py-5 md:w-11/12 mx-auto flex justify-between'>
            <div>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className='text-xl font-semibold'>
                <Link className='md:mr-5' to="/">Home</Link>
                <Link className='md:mr-5' to="about">About us</Link>
                <Link className='md:mr-5' to="management">Management</Link>
                <Link className='md:mr-5' to="news">News & Event</Link>
                <Link className='md:mr-5' to="gallery">Gallery</Link>
                <Link to="contact">Contact us</Link>
            </div>
            <div>
            <BsToggleOff></BsToggleOff>
            </div>
        </div>
    );
};

export default Navber;