import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux"
import { LectureReducer } from "./reducers/LectureReducer"
import { AuthReducer } from "./reducers/AuthReducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    lectureModule: LectureReducer,
    authModule: AuthReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))