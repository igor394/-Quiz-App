import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {gettingUserResults} from "../actions/quiz";
import {useSelector} from "react-redux";

const Result = () => {
    const [title, setTitle] = useState();
    const [balls, setBalls] = useState();
    const [users, setUsers] = useState();
    const [listQuest, setListQuest] = useState();
    const listQuizStore = useSelector(state => state.quizs.value || []);
    const {quizURL} = useParams()


    useEffect(() => {
        if (quizURL !== undefined) {

            const result = async () => {
                let back = await gettingUserResults(quizURL);
                setTitle(back.quiz);
                setUsers(back.user);
                setBalls(back.result);
            }
            result()

        }
    }, [quizURL]);

    useEffect(() => {
        const foundQuiz = listQuizStore.find(i => i['title'] === title);

        if(foundQuiz) {
            setListQuest(foundQuiz.info.map((item, index) => <li key={index}>{item['questionText']}  </li>))
        }
    },[title,listQuizStore])

    return (
        <div className="container d-flex justify-content-center">
            <div className="result-url">
                {quizURL === undefined || title=== undefined?
                    <h2>There is no data about the user. please register and take at least one quiz!</h2>
                    :
                    <div>
                        <h2>A user named {users}, passed the quiz {title} by answering {balls} questions correctly. </h2>
                        <h4>The quiz had the following questions:</h4>
                        <ul>
                            {listQuest}
                        </ul>
                    </div>
                }

            </div>
        </div>

    );
};

export default Result;