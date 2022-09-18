import { combineReducers,createStore } from "redux";
import {baiTapMovie} from './reducer'
const rootReducers = combineReducers({
    baiTapMovie,

   
})

export const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())