import Option from '../Option/Option';

const Question = ({ questionData, idx }) => {
    const { question, options, id } = questionData;

    return (
        <div className='bg-green-600 my-4 p-8 w-[60%] mx-auto shadow-md'>
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