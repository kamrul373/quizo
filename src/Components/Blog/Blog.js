import React from 'react';
import { Link } from 'react-router-dom';
import "./blog.css";

const Blog = ({ blog }) => {
    const { img, title, short_description, description_1, description_2 } = blog;
    return (
        <div className='blog lg:p-8 p-4'>
            <h2 className='lg:text-4xl text-2xl mb-3'>{title}</h2>
            <div className='lg:p-8 p-4'>
                <img src={img} alt={title} />
            </div>
            <div className='text-xl py-2 text-justify '>
                <p className='py-2 '>{short_description}</p>
                <p className='py-2'>{description_1}</p>
                <p className='py-2'>{description_2}</p>
            </div>
        </div>
    );
};

export default Blog;