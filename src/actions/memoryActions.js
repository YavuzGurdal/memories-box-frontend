// burayi redux icin olusturdum

import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionsConstants'

import * as api from '../axios/index'

export const fetchMemories = () => async (dispatch) => {// dispatch sevk etmek demek. gelen datayi reducer'a sevk ediyoruz. yani gonderiyoruz
    try {
        const { data } = await api.fetchMemories() //fetchMemories'i axios kasorunde tanimladim

        dispatch({ type: FETCH_ALL, payload: data }) // aktion'in type ni burda belirliyorum ve gondermek istedigim bilgileri payload ile reducer'a gonderiyorum
    } catch (error) {
        console.log(error)
    }
}

export const createMemory = (memory) => async (dispatch) => { // memory istegimizden gelen memory
    try {
        const { data } = await api.createMemory(memory)

        dispatch({ type: CREATE, payload: data }) // dispatch ile reducer'a gonderiyorum
    } catch (error) {
        console.log(error)
    }
}

export const deleteMemory = (id) => async (dispatch) => {
    try {
        await api.deleteMemory(id)

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const updateMemory = (id, updatedMemory) => async (dispatch) => {
    try {
        const { data } = await api.updateMemory(id, updatedMemory)

        //console.log(data)

        dispatch({ type: UPDATE, poyload: data })
    } catch (error) {
        console.log(error)
    }
}