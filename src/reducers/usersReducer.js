import { AUTH, SIGNUP_FAIL, SIGNIN_FAIL, LOGOUT, LOGOUT_FAIL, REFRESH_ACCESS_TOKEN_ACCESS, REFRESH_ACCESS_TOKEN_FAIL } from "../constants/actionsConstants.js";

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

        case REFRESH_ACCESS_TOKEN_ACCESS:

            const data = { user: state.userData.user, accessToken: action.payload }

            localStorage.setItem('user', JSON.stringify(data))

            return { ...state, userData: data }

        case REFRESH_ACCESS_TOKEN_FAIL:
            return { error: action.payload }

        default:
            return state;
    }
}

export default usersReducer