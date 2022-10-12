import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    return (
        <div className='my-3 py-4'>
            <h1 className='text-5xl text-green-600'>Blogs</h1>
            <div className='w-[90%] mx-auto'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;