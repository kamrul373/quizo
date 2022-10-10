import React, { useContext } from 'react';
import { TopicContext } from '../../Layout/Main';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useContext(TopicContext);
    return (
        <div className='grid grid-cols-2 gap-16 p-8 bg-zinc-100'>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;