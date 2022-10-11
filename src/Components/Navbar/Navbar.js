import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='sticky top-0 z-50'>
            <div className='bg-white lg:flex lg:px-8  py-4 px-0 justify-between items-center rounded shadow-lg relative'>
                <div className="logo">
                    <h3 className='text-4xl font-bold italic text-green-500 mb-3 lg:mb-0'><Link to="/">Quizo</Link></h3>
                </div>
                <nav>
                    <div className={`lg:hidden h-8 w-8 absolute right-5 top-8 z-40`} onClick={() => setOpen(!open)}>
                        {
                            open ? <XMarkIcon /> : <Bars3Icon />
                        }
                    </div>
                    <ul className={`md:py-3 w-full lg:static absolute duration-700 ease-in  lg:bg-white bg-violet-200 ${open ? "top-[65px]" : "top-[-350px]"}`}>
                        <NavItem open={open}></NavItem>
                    </ul>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;