import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8080' }) // bunu surekli ayni seyi yazmamak icin yazdim

// *** burda kullandigim metodlari server -> routers -> memoryRouter.js icinde yazdim. burdan axiosla o metodlari kullanarak serverdan db'ye istek yapiyorum. ve bu islemleri yapiyorum 

// GET ALL MEMORIES
export const fetchMemories = async () => await API.get('/memories')

// GET ONE MEMORY
export const fetchMemory = async (id) => await API.get(`/memories/${id}`)

// CREATE MEMORY
export const createMemory = async (newMemory) => {
    await API.post('/memories', newMemory) //  server a post istegi gonderiyoruz. server da post metodu ile newMemory'yi db ye gonderiyor
}

// UPDATE MEMORY
export const updateMemory = async (id, updatedMemory) => await API.put(`/memories/${id}`, updatedMemory)
// server a update istegi gonderiyoruz. server da put metodu ile Memory'yi db'den update ediyor

// DELETE MEMORY
export const deleteMemory = async (id) => await API.delete(`/memories/${id}`) // server a delete istegi gonderiyoruz. server da delete metodu ile Memory'yi db'den siliyor


