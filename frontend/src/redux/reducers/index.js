import { combineReducers } from "redux";
import { auth } from "./auth";
import { type } from "./type";


 const Reducers = combineReducers({
    auth,
    type
})

export default Reducers;