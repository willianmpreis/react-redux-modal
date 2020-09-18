import { createStore } from 'redux'

const INITIAL_STATE = {
    data: []
}

function users(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_USER':
            return { ...state, data: [...state.data, { id: Math.random(), ...action.user } ]}
        case 'SET_USER':
            const users = state.data
            const user = action.user
            const newUsers = users.map(u => { return u.id === user.id ? user : u })
            return { ...state, data: [...newUsers ]}
        default:
            return state;
    }
}

const store = createStore(users)

export default store