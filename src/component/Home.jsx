import React, {useState} from 'react';
import Context from "../context/context";
import QuizLogic from "./QuizLogic";
import {useSelector} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import env from '../env.json';

const Home = () => {
    const listQuizStore = useSelector(state=> state.quizs.value);
    const passing = useSelector(state=> state.user.passing);
    const [quizIndex, setQuizIndex] = useState(null);
    const [timer, setTimer] = useState(0);
    const value = {quizIndex, setQuizIndex, timer};
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const [idquiz, setIdquiz]= useState();
    const [myUrl, setMyUrl] = useState('')
    const handleClose = () => {
        setShow(false);
        setMyUrl('')
    }
    const handleShow = (index) => {
        setIdquiz(index);
        setShow(true);
        let obj = passing.filter(item=> item.quizId===index);
        setTitle(listQuizStore[index]['title']);
        setText(listQuizStore[index]['info'].map(item=>`Question:${item['questionText']} Answers: ${
            item['answerOptions'].map((elem, index)=> elem['answerText'])
        }.  `));
        setResult(obj[0].correctAnswers);

    }
    const handlerShare=()=>{

        let obj = passing.filter(i=> i['quizId'] === idquiz)[0]['id'];
        console.log(obj)
        let encrypted = Buffer.from(String(obj)).toString('base64')

        setMyUrl(`Share this URL: ${env.urlFrontRes}${encrypted}`) ;
        navigator.clipboard.writeText(`${env.urlFrontRes}${encrypted}`);

    }

    const  selectPlay = (index ) =>()=> {
        setTimer(+new Date())
        setQuizIndex(index);
    }
    let arrPass = passing.map(i=> i.quizId);
    return (

        <Context.Provider value={value}>
            <div className="main">
                {quizIndex!==null ? <QuizLogic quiz={listQuizStore[quizIndex]}/> : listQuizStore.map((item, index)=>{
                    if(arrPass.indexOf(index)===-1){
                        return  <div onClick={selectPlay(index)} key={index} className="quiz-list"><div>{item['title']}</div></div>
                    } else {
                        return <div key={index} className="quiz-list not-focus"><div>{item['title']}<p>You have already passed this test</p>
                                    <Button variant="primary" onClick={()=>handleShow(index)}>
                                        results test
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Quiz: {title}.</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>{text}</Modal.Body>
                                        <Modal.Body>You correct answers: {result}</Modal.Body>
                                        <Modal.Body>{myUrl}</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="info"  onClick={()=>handlerShare(index)}>
                                                Share
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                        </div></div>
                    }
                })
                    }
            </div>

        </Context.Provider>

    );
}
export default Home;