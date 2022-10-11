import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { correctORWrong } from '../../Utility/answer';
import Question from '../Question/Question';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import countTotal from '../../Utility/countTotal';


export const QuestioncOontext = createContext("");

const Quiz = () => {
    // loading quiz by react route loader property
    const data = useLoaderData().data;
    // destructuring data
    const { name, questions } = data;
    // defining state for total correct and wrong answer calculation
    const [correct, setCorrect] = useState([]);
    const [wrong, setWrong] = useState([]);
    // question option handler when clicked 
    // toast showing base on correct or wrong 
    const handlerAnswer = (questionId, answer) => {
        const answerChecker = correctORWrong(questionId, answer, questions);
        const existsinWrong = wrong.find(w => w === questionId);
        const exissinCorret = correct.find(c => c === questionId);
        countTotal(exissinCorret, existsinWrong, setCorrect, setWrong, answerChecker, questionId);
    }
    return (
        <div className='p-8'>
            <h2 className='text-4xl mb-8'>Quiz of : {name}</h2>
            <div className='bg-white font-semibold p-8 w-[250px] mx-auto lg:fixed static top-48 right-2'>
                <small className='text-green-600 text-xl'>Correct Answer : {correct.length} </small>
                <br />
                <small className='text-red-600 font-semibold'>Wrong Answer : {wrong.length}</small>
            </div>
            <QuestioncOontext.Provider value={handlerAnswer}>
                {
                    questions.map((questionData, idx) => <Question
                        key={questionData.id}
                        questionData={questionData}
                        idx={idx}
                    ></Question>)
                }
            </QuestioncOontext.Provider>

            <ToastContainer autoClose={1000} />
        </div>
    );
};

export default Quiz;