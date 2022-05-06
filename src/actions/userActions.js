import { AUTH, SIGNUP_FAIL, SIGNIN_FAIL, LOGOUT, LOGOUT_FAIL, REFRESH_ACCESS_TOKEN_ACCESS, REFRESH_ACCESS_TOKEN_FAIL } from "../constants/actionsConstants.js";
import * as api from '../axios'

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData) // server'dan donen data

        dispatch({ type: AUTH, payload: data }) // reducer'a gonderiyoruz. state guncelleniyor

        //dispatch({ type: SIGNUP_FAIL, payload: '' }) // kayit basarili ise error'un icini bosaltiyorum

        navigate('/'); // ana sayfaya donmesi icin.
    } catch (error) {
        dispatch({
            type: SIGNUP_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)

        dispatch({ type: AUTH, payload: data })

        //dispatch({ type: SIGNIN_FAIL, payload: '' }) // kayit basarili ise error'un icini bosaltiyorum

        navigate('/'); // ana sayfaya donmesi icin.
    } catch (error) {
        dispatch({
            type: SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const logOut = (id) => async (dispatch) => {
    try {
        const { message } = await api.logOut(id)

        dispatch({ type: LOGOUT, payload: message })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const getAccessToken = (id) => async (dispatch) => {
    try {
        const { data } = await api.refreshAccessToken(id)

        //console.log(data)

        dispatch({ type: REFRESH_ACCESS_TOKEN_ACCESS, payload: data })
    } catch (error) {
        dispatch({
            type: REFRESH_ACCESS_TOKEN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })

    }
}