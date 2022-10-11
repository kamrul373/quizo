import Option from '../Option/Option';
import { EyeIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Question = ({ questionData, idx }) => {
    const { question, options, id } = questionData;
    const [showCorrect, setShowCorrect] = useState(false);
    console.log(questionData);
    return (
        <div className='bg-green-600 my-4 p-8 w-[60%] mx-auto shadow-md relative'>
            {/* Eye icon to showing correct answer */}
            <div >
                {
                    showCorrect ? <XMarkIcon className="h-6 w-6 text-white absolute top-3 right-5" onClick={() => setShowCorrect(!showCorrect)} /> : <EyeIcon className="h-6 w-6 text-white absolute top-3 right-5" onClick={() => setShowCorrect(!showCorrect)} />
                }
                <div className={`bg-white text-green-600 font-semibold p-4 absolute top-10 right-5 ${showCorrect || "hidden"} `}>
                    <p className='text-black font-bold'>Correct Answer :</p>
                    {
                        showCorrect ? questionData.correctAnswer : ""
                    }
                </div>
            </div>
            <span className='text-zinc-50'>Question {idx + 1}</span>
            <h2 className='text-xl font-bold text-white pt-3 pb-8'>{question}</h2>
            <div className='grid grid-cols-2 gap-4 items-center '>
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        option={option}
                        optionNumber={idx}
                        questionId={id}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;