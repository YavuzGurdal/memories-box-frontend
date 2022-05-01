import { AUTH, SIGNUP_FAIL } from "../constants/actionsConstants.js";
import * as api from '../axios'

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData) // server'dan donen data

        dispatch({ type: AUTH, payload: data }) // reducer'a gonderiyoruz. state guncelleniyor

        dispatch({ type: SIGNUP_FAIL, payload: '' }) // kayit basarili ise error'un icini bosaltiyorum

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