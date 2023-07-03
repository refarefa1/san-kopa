const INITIAL_STATE = {
    loggedInUser: null
}

export function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_LOGGED_USER': 
        return {
            ...state,
            loggedInUser: action.user
        }
        default:
            return {
                ...state
            }
    }
}