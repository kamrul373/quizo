import React, { createContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';

export const TopicContext = createContext([]);


const Main = () => {
    const topics = useLoaderData();
    return (
        <div>
            <TopicContext.Provider value={topics}>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </TopicContext.Provider>
        </div>
    );
};

export default Main;