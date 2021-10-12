
import { USER_TYPE } from "../constants";

const initialState = {
    currentUserType: 'customer',
}

export const type = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPE:
            return {
                ...state,
                currentUserType: action.currentUserType,
            }
        default:
            return state;
    }
}