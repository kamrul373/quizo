import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { correctORWrong } from '../../Utility/Answer';
import Question from '../Question/Question';

export const QuestioncOontext = createContext("");

const Quiz = () => {
    const data = useLoaderData().data;
    const { name, questions } = data;
    const [correct, setCorrect] = useState(0);

    const handlerAnswer = (questionId, answer) => {
        const answerChecker = correctORWrong(questionId, answer, questions);
    }
    return (
        <div className='p-8'>
            <h2 className='text-4xl mb-8'>Quiz of : {name}</h2>
            <QuestioncOontext.Provider value={handlerAnswer}>
                {
                    questions.map((questionData, idx) => <Question
                        key={questionData.id}
                        questionData={questionData}
                        idx={idx}
                    ></Question>)
                }
            </QuestioncOontext.Provider>
            <div className='bg-white p-8 w-[250px] fixed top-48 right-2'>
                <small className='text-green-600'>Correct Answer</small>
                <br />
                <small>Wrong Answer</small>
            </div>
        </div>
    );
};

export default Quiz;