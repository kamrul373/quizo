import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../assets/img/banner.jpg"
const Header = () => {
    return (
        <div className="relative">
            <img
                src={Banner}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75 ">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-center xl:flex-row lg:h-[370px]">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Winners train losers complain
                            </h2>
                            <p className="max-w-xl mb-8  text-white md:text-lg">
                                Be Ready, No one can stop you.
                            </p>
                            <Link
                                to="/topics"
                                className='bg-violet-700 hover:bg-violet-900 duration-500 text-white px-8 py-3 rounded'
                            >
                                Get Started
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;