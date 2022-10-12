import React from 'react';
import { Link } from 'react-router-dom';
import "./blog.css";

const Blog = ({ blog }) => {
    const { id, short_description, img, title } = blog;
    return (
        <div className='blog p-8 grid lg:grid-cols-2 justify-start gap-8'>
            <img src={img} alt={title} />
            <div className='text-justify'>
                <h2 className='text-4xl mb-3'>{title}</h2>
                <p className='text-xl py-2'>{short_description}</p>
                <div className='mt-8'>
                    <Link to={`/blog/${id}`} className="bg-green-500 px-12 py-3 ">Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;