
import { TIME } from "../constants";

const initialState = {
    dur_timer: 0,
}

export const type = (state = initialState, action) => {
    switch (action.type) {
        case TIME:
            return {
                ...state,
                dur_timer: action.dur_timer,
            }
        default:
            return state;
    }
}