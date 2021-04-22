const GET_QUIZ = 'GET_QUIZ';

const  defaultState ={
    value:[]
};

export default function quizReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_QUIZ:
            return {
                value: action.payload,
            }
        default:
            return state
    }
}


export const getList = quiz => ({ type: GET_QUIZ, payload: quiz})



