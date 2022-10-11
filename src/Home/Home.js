import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Topics from '../Components/Topics/Topics';

const Home = () => {
    const [quiz, setQuiz] = useState(0);
    const handleQuizLoader = (id) => {
        console.log(id);
    }
    return (
        <div>
            <Header></Header>
            <Topics handleQuizLoader={handleQuizLoader}></Topics>
        </div>
    );
};

export default Home;