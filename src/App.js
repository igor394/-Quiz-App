import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect} from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import Registr from "./component/Registr";
import Authoriz from './component/Authoriz'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {authentication} from "./actions/user";
import {getListQuiz} from "./actions/quiz";
import Result from "./component/Result";



function App() {

    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(authentication())
        dispatch(getListQuiz())
    }, [dispatch])

return (
    <Router>
        <Header/>
        {!isAuth ? <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/reg" component={Registr} />
            <Route exact path="/login" component={Authoriz} />
            <Route exact path="/api/quiz" component={Result} />
            <Route exact path="/api/quiz/:quizURL" component={Result} />
        </Switch> : <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/api/quiz" component={Result} />
            <Route exact path="/api/quiz/:quizURL" component={Result} />
        </Switch>}

    </Router>
);
}
export default App;
