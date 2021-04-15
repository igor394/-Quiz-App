import React from 'react';


const QuizItems = (props) => {

    return (
        <div className="content-qwest">
            <div className="content-text">
                <div>
                    Question {props.current + 1}/{props.firstQuiz.length}
                </div>
                <div style={{paddingTop:'50px'}}>{props.firstQuiz[props.current].questionText}</div>
            </div>
            <div className="content-btn">
                {props.firstQuiz[props.current].answerOptions.map((item, index) => (
                    <button key={index} onClick={() => props.handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
                ))}
            </div>
        </div>
    );
};

export default QuizItems;