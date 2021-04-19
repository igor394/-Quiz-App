import React, {useState} from 'react';
import Context from "../context/context";
import QuizLogic from "./QuizLogic";
import {quizList} from "../data/dataQuiz";

const Home = () => {
    const [quiz, setQuiz] = useState('');
    const [timer, setTimer] = useState(0)
    const [check, setCheck] = useState(false);
    const value = {check, setCheck, quiz, timer};

    const  selectPlay =(e)=>{
        let item = e.target.id;
        setCheck(true);
        setTimer(+new Date())
        setQuiz(item);
    }


    return (

        <Context.Provider value={value}>
            <div className="main">
                {check?<QuizLogic/> : Object.keys(quizList).map((item, index)=>
                    <div onClick={selectPlay} key={index} id={item} className="quiz-list"><div>{item}</div></div>)}
            </div>

        </Context.Provider>

    );
}
export default Home;