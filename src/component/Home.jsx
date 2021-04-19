import React, {useState} from 'react';
import Context from "../context/context";
import QuizLogic from "./QuizLogic";
import {useSelector} from "react-redux";

const Home = () => {
    const listQuizStore = useSelector(state=> state.quizs.value)
    const [quizIndex, setQuizIndex] = useState(null);
    const [timer, setTimer] = useState(0);

    const value = {quizIndex, setQuizIndex, timer};


    const  selectPlay = (index ) =>()=> {
        console.log(listQuizStore)
        console.log(index)
        setTimer(+new Date())
        setQuizIndex(index);
    }


    return (

        <Context.Provider value={value}>
            <div className="main">
                {quizIndex!==null ? <QuizLogic quiz={listQuizStore[quizIndex]}/> : listQuizStore.map((item, index)=>
                    <div onClick={selectPlay(index)} key={index} className="quiz-list"><div>{item['title']}</div></div>)}
            </div>

        </Context.Provider>

    );
}
export default Home;