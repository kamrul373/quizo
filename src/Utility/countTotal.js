import { toast } from "react-toastify";

const countTotal = (exissinCorret, existsinWrong, setCorrect, setWrong, answerChecker, questionId) => {
    if (exissinCorret || existsinWrong) {
        toast.error("This answer will not count in total as you previously answered this question in this session", {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 5000,
        });
    }
    else if (answerChecker) {
        setCorrect((prev) => [...prev, questionId]);
    } else {
        setWrong((prev) => [...prev, questionId]);
    }
}
export default countTotal;