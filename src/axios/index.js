import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8080' }) // bunu surekli ayni seyi yazmamak icin yazdim

// GET ALL MEMORIES
export const fetchMemories = async () => await API.get('/memories')

// CREATE MEMORY
export const createMemory = async (newMemory) => {
    await API.post('/memories', newMemory) //  server a post istegi gonderiyoruz. server da post metodu ile newMemory'yi db ye gonderiyor
}