import './App.css';
import React, {useState} from "react";
import {quizList} from './data/dataQuiz'
import QuizLogic from "./component/QuizLogic";
import Context from './context/context';

function App() {
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
            {check?<QuizLogic/> : Object.keys(quizList).map((item, index)=> <button onClick={selectPlay} key={index} id={item} type="submit">{item}</button>)}
        </Context.Provider>

);
}
export default App;
