import axios from 'axios'

const initialState = {
    loading: false,
    user: {}
}

const GET_USER = "GET_USER"

export function getUser() {
    const user = axios
    .get('https://randomuser.me/api/')
    .then((res) => res.data.results[0])
    return {
        type: GET_USER,
        payload: user
    }
}


function userReducer(state = initialState, action) {
    switch(action.type){
        case GET_USER + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case GET_USER + '_FULFILLED':
            return {
                loading: false,
                user: action.payload
            }
        case GET_USER + '_REJECTED':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default userReducer