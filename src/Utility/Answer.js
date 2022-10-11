const correctORWrong = (questionId, answer, questions) => {
    const AnsweredQuestion = questions.find(question => question.id === questionId);

    const rightAnswer = AnsweredQuestion.correctAnswer;
    if (rightAnswer === answer) {

    }
}

export { correctORWrong }