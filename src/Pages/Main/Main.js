import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Share/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <h3>Footer</h3>
        </div>
    );
};

export default Main;