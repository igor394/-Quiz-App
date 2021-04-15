import React from 'react';


const QuizItems = (props) => {

    return (
        <div>
            <div>
                <div>
                    <span>Question {props.current + 1}</span>/{props.firstQuiz.length}
                </div>
                <div>{props.firstQuiz[props.current].questionText}</div>
            </div>
            <div >
                {props.firstQuiz[props.current].answerOptions.map((item, index) => (
                    <button key={index} onClick={() => props.handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
                ))}
            </div>
        </div>
    );
};

export default QuizItems;