import { toast } from "react-toastify";

const correctORWrong = (questionId, answer, questions) => {
    const AnsweredQuestion = questions.find(question => question.id === questionId);

    const rightAnswer = AnsweredQuestion.correctAnswer;
    if (rightAnswer === answer) {
        toast.success("Correct Answer", {
            position: toast.POSITION.TOP_CENTER
        });
        return 1;
    } else {
        toast.error("Wrong Answer", {
            position: toast.POSITION.TOP_CENTER
        })
        return 0;
    }

}

export { correctORWrong }