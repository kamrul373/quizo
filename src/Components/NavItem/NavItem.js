import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavItem.css";

const NavItem = () => {
    return (
        <div className='lg:flex lg:py-0 py-[20px]'>
            <li className='md:mb-2'>
                <NavLink
                    className={`mx-3 text-lg hover:text-green-500  ${({ isActive }) => isActive && "active"} `} to="/home"
                > Home</NavLink>
            </li>
            <li className='md:mb-2'>
                <NavLink
                    className={`mx-3 text-lg  text-slate-700 hover:text-green-500 $${({ isActive }) => isActive && "active"} `}
                    to="/topics">Topics</NavLink>
            </li>
            <li className='md:mb-2'>
                <NavLink
                    className={`mx-3 text-lg text-slate-700 hover:text-green-500 ${({ isActive }) => isActive && "active"} `}
                    to="/statistics">Statistics</NavLink>
            </li>
            <li className='md:mb-2'>
                <NavLink
                    className={`mx-3 text-lg text-slate-700 hover:text-green-500 ${({ isActive }) => isActive && "active"} `}
                    to="/blogs">Blogs</NavLink>
            </li>

        </div>

    );
};

export default NavItem;