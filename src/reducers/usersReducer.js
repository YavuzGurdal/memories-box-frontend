import { AUTH, SIGNUP_FAIL } from "../constants/actionsConstants.js";

const usersReducer = (state = { userData: null }, action) => { // bu sekildede yazabiliriz
    switch (action.type) {
        case AUTH:
            localStorage.setItem('user', JSON.stringify(action.payload)) // localstrage'e user anahtariyla tutuyorum. string olarak tutulmasi lazim
            return { ...state, userData: action.payload }

        case SIGNUP_FAIL:
            return { error: action.payload }

        default:
            return state;
    }
}

export default usersReducer