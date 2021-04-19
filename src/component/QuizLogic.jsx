import React, {useContext, useEffect, useState} from 'react';
import ShowRes from "./ShowRes";
import QuizItems from "./QuizItems";
import Context from '../context/context';
import {useSelector} from "react-redux";



const QuizLogic = () => {

    const listQuizStore = useSelector(state=> state.quizs.value);
    const { quizIndex, setQuizIndex, timer} = useContext(Context);
    const [date, setDate] = useState(timer);
    const [current, setCurrent] = useState(0);
    const [showResult, setShowRes] = useState(false);
    const [balls, setBalls] = useState(0);
    const [showQuiz, setShowQuiz] = useState(listQuizStore[quizIndex]['info']);


    useEffect(()=>{
        setShowQuiz(listQuizStore[quizIndex]['info'])
    },[quizIndex, listQuizStore])





    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) setBalls(balls + 1);
        let nextQuest = current + 1;
        if (showQuiz.length > nextQuest) {
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
        setQuizIndex(null)
    };

    let complit = <h4>Not enough points, please try again.</h4>
    if(balls>2){
        complit = <h4>Great result! Go to the next quiz!</h4>
    }
    console.log(showQuiz)
    return (
        <div className='app'>
            {showResult ? <ShowRes balls={balls} timer={date} complit={complit} startTest={startTest} changeQuiz={changeQuiz} firstQuiz={showQuiz}/> :
                <QuizItems handleAnswerOptionClick={handleAnswerOptionClick} current={current} firstQuiz={showQuiz}/>}
        </div>
    );
};

export default QuizLogic;