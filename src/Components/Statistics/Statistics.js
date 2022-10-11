import React, { useContext } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TopicContext } from '../../Layout/Main';


const Statistics = () => {
    const topics = useContext(TopicContext);
    const COLORS = ['#61DAFB', '#FFBB28', '#2862E9', '#F64D27'];
    return (
        <div className='mt-8 px-12 '>
            <h2 className='text-3xl text-green-600 font-semibold'>Topics Question Stat</h2>
            <div>
                <PieChart width={400} height={400} >
                    <Pie
                        dataKey="total"
                        data={topics}
                        label
                        outerRadius={150}
                        fill="#8884d8"
                        labelLine={true}
                    >
                        {
                            topics.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }

                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;