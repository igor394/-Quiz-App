import axios from "axios";
import env from '../env.json';
import {setUser} from "../reducers/userReducer";


export  const registrations = async (name, password, email) => {
    try{
        const response = await axios.post(env.urlBackReg, {
            "name": name,
            "password": password,
            "email": email
        })
        alert(response.data.message)
    }catch (e) {
        alert(e.response.data.message)
    }
}
export  const authorizations = (name, password) => {
    return async dispatch =>{
        try{
            const response = await axios.post(env.urlBackLog, {
                "name": name,
                "password": password
            })
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token)
        }catch (e) {
            alert(e.response.data.message)
        }
    }
}
export  const authentication = () => {
    return async dispatch =>{
        try{
            const response = await axios.get(env.urlBackAuth,
                { headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}
                })
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token)
        }catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}