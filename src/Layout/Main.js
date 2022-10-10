import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;