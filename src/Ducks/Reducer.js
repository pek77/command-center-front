const initialState = {
    role:1,
}


const SET_ROLE = 'SET_ROLE'


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_ROLE:
            return Object.assign({}, state, { role: action.payload })
        default:
            return initialState
            break;
    }
}


export function setRole(role) {
    return {
        type: SET_ROLE,
        payload: role
    }
}

