import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, total, logo } = topic;
    return (
        <div className='bg-green-800 border border-green-100 p-8 shadow-xl rounded'>
            <div className='w-full'>
                <img src={logo} alt={name} className="mx-auto w-[200px]" />
            </div>
            <div className="py-4 text-white">
                <h4 className='text-2xl font-bold'>{name}</h4>
                <p>Total Questions : {total} </p>
            </div>

            <div className='my-6'>
                <Link className='px-16 py-3 my-4 text-white font-bold bg-green-600 rounded hover:bg-green-700 duration-700' to={`/quiz/${id}`}>Start Quiz</Link>
            </div>

        </div>
    );
};

export default Topic;