import { AUTH, SIGNUP_FAIL, SIGNIN_FAIL, LOGOUT, LOGOUT_FAIL } from "../constants/actionsConstants.js";

const usersReducer = (state = { userData: null }, action) => { // bu sekildede yazabiliriz
    switch (action.type) {
        case AUTH:
            localStorage.setItem('user', JSON.stringify(action.payload)) // localstrage'e user anahtariyla tutuyorum. string olarak tutulmasi lazim
            return { ...state, userData: action.payload }

        case SIGNUP_FAIL:
            return { error: action.payload }

        case SIGNIN_FAIL:
            return { error: action.payload }

        case LOGOUT: // serverdan bir cevap geldiyse ne yapilacagini yaziyoruz
            localStorage.removeItem('user')
            return { ...state, userData: null } // state'in hepsini aliyorum userDatayi degistiriyorum

        case LOGOUT_FAIL:
            return { error: action.payload }

        default:
            return state;
    }
}

export default usersReducer