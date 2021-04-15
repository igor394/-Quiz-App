import React, {useContext, useEffect, useState} from 'react';
// import {firstQuiz} from "../data/dataQuiz";
import ShowRes from "./ShowRes";
import QuizItems from "./QuizItems";
import Context from '../context/context';
import {quizList} from "../data/dataQuiz";



const QuizLogic = () => {

    const {setCheck, quiz, timer} = useContext(Context);
    const [firstQuiz, setFirstQuiz] = useState(quizList[quiz]);
    const [date, setDate] = useState(timer);
    const [current, setCurrent] = useState(0);
    const [showResult, setShowRes] = useState(false);
    const [balls, setBalls] = useState(0);

    useEffect(()=>{
        setFirstQuiz(quizList[quiz]);
    },[quiz])

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) setBalls(balls + 1);
        let nextQuest = current + 1;
        if (firstQuiz.length > nextQuest) {
            setCurrent(nextQuest);
        } else {
            setDate(prev=> (Math.floor((+new Date() - prev)/1000 )))
            setShowRes(true);
        }
    };
    const startTest =()=>{
        setBalls(0)
        setShowRes(false)
        setCurrent(0)
        setDate(+new Date())

    };
    const changeQuiz =()=>{
        setBalls(0)
        setShowRes(false)
        setCurrent(0)
        setCheck(false)
    };

    let complit = <h4>Not enough points, please try again.</h4>
    if(balls>2){
        complit = <h4>Great result! Go to the next quiz!</h4>
    }
    return (
        <div className='app'>
            {showResult ? <ShowRes balls={balls} timer={date} complit={complit} startTest={startTest} changeQuiz={changeQuiz} firstQuiz={firstQuiz}/> :
                <QuizItems handleAnswerOptionClick={handleAnswerOptionClick} current={current} firstQuiz={firstQuiz}/>}
        </div>
    );
};

export default QuizLogic;