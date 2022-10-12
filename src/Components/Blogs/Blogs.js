import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='my-3 py-4'>
            <h1 className='lg:text-5xl text-3xl text-green-600'>Blogs</h1>
            <div className='lg:w-[70%] w-[95%] mx-auto'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;