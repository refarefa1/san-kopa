const INITIAL_STATE = {
    lectures: [],
    filterBy: {
        topic: '',
        areas: [],
    }
}

export function LectureReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_LECTURES':
            return {
                ...state,
                lectures: action.lectures
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