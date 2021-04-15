import './App.css';
import React, {useState} from "react";
import {firstQuiz} from "./data/first";

function App() {
const [check, setCheck] = useState(false)
const [timer, setTimer] = useState(0)
const [current, setCurrent] = useState(0);
const [showResult, setShowRes] = useState(false);
const [balls, setBalls] = useState(0);

const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setBalls(balls + 1);
    let nextQuest = current + 1;
    if (firstQuiz.length > nextQuest) {
        setCurrent(nextQuest);
    } else {
        setTimer(prev=> (Math.floor((+new Date() - prev)/1000 )))
        setShowRes(true);
    }
};
const startTest =()=>{
    setBalls(0)
    setShowRes(false)
    setCurrent(0)
    setCheck(true)
    setTimer(+new Date());
};
const changeQuiz =()=>{};

let complit = <h4>Not enough points, please try again.</h4>
if(balls>2){
    complit = <h4>Great result! Go to the next quiz!</h4>
}


return (
    <>
        { check ?
        <div className='app'>
            {showResult ? (
                <div>
                    <h4>You correct answers {balls} of {firstQuiz.length}</h4>
                    <h4>You time: {Math.floor((timer % (60 * 60 * 24)) / (60 * 60))} hours, {Math.floor((timer % (60 * 60)) / (60))} minuts, {Math.floor((timer % (60)) / 1)} second.</h4>
                    {complit}
                    <button onClick={startTest}>Restert test</button>
                    <button onClick={changeQuiz}>Select new quiz</button>
                </div>
            ) : (
                <>
                    <div >
                        <div >
                            <span>Question {current + 1}</span>/{firstQuiz.length}
                        </div>
                        <div >{firstQuiz[current].questionText}</div>
                    </div>
                    <div >
                        {firstQuiz[current].answerOptions.map((item, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div> : <button onClick={startTest}>Start test</button>
        }
    </>
);
}
export default App;
