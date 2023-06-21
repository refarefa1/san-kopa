const INITIAL_STATE = {
    instructors: [],
    filterBy: {
        name: '',
        areas: [],
    }
}

export function InstructorReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_INSTRUCTORS':
            return {
                ...state,
                instructors: action.instructors
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...state.filterBy, ...action.filterBy }
            }

        default:
            return state
    }
}