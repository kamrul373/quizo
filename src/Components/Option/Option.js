import React, { useContext } from 'react';
import { QuestioncOontext } from '../Quiz/Quiz';
import "./Option.css";

const Options = ({ option, optionNumber, questionId }) => {
    const handlerAnswer = useContext(QuestioncOontext);

    return (
        <div className={`bg-white p-3 shadow-lg rounded} `} >
            <input type="radio" name='answeroption' id={option} onClick={() =>
                handlerAnswer(questionId, option)
            } />
            <label htmlFor={option} className="font-semibold px-2">
                <span className='mx-2'>{optionNumber + 1}</span> {option}
            </label >
        </div>
    );
};

export default Options;