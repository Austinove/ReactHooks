import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {add} from "./add";

const createRootReducer = (history)=>combineReducers({
    router: connectRouter(history),
    add,
})

export default createRootReducer;