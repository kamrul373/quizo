import React, { useContext } from 'react';
import { QuestioncOontext } from '../Quiz/Quiz';

const Options = ({ option, optionNumber, questionId }) => {
    const handlerAnswer = useContext(QuestioncOontext);
    return (

        <button className='bg-white p-3 shadow-lg rounded' onClick={() => handlerAnswer(questionId, option)} type='radio'>
            <span className='mr-2'>{optionNumber + 1} </span> {option}
        </button>


    );
};

export default Options;