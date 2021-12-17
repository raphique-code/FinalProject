import { combineReducers } from "redux";
import { auth } from "./auth";
import { type } from "./type";
import { time} from "./time"

 const Reducers = combineReducers({
    auth,
    type,
    time

})

export default Reducers;