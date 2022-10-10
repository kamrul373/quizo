import React from 'react';

const Topic = ({ topic }) => {
    const { id, name, total, logo } = topic;
    return (
        <div className='bg-violet-200 border border-violet-300 p-8 shadow-xl rounded'>
            <div className='w-full'>
                <img src={logo} alt={name} className="mx-auto w-[200px]" />
            </div>
            <div className="py-4">
                <h4 className='text-2xl font-bolder'>{name}</h4>
                <p>Total Quiz : {total} </p>
            </div>
            <button className='px-16 py-3 my-4 text-white bg-violet-700'>Start Quiz</button>
        </div>
    );
};

export default Topic;