import axios from "axios";
import env from '../env.json';
import {getList} from "../reducers/quizReducer";


export  const getListQuiz = () => {
    return async dispatch =>{
        try{
            const response = await axios.get(env.urlBackList)
            dispatch(getList(response.data));
        }catch (e) {
            alert(e.message)
        }
    }
}

